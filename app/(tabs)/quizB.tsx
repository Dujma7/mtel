import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button, Surface } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { styles } from "../styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity } from 'react-native';

// Replace with the actual imported JSON
import questionsData from '../../assets/questions/pitanja.json';

type QuestionProps = {
    goToNextQuestion: (correct: boolean) => void;
    options: string[];
    correctAnswer: string;
    question: string;
    resetTrigger:boolean;
};

type NavigationProp = {
    navigate: (screen: string) => void;
};

export default function QuizScreenB({ navigation }: { navigation: NavigationProp }) {
    const [questions, setQuestions] = useState(questionsData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);
    const [showWinModal, setShowWinModal] = useState(false);
    const [resetTrigger, setResetTrigger] = useState(false);

    const timerId = useRef<NodeJS.Timeout | null>(null);
    
    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText];

    // Timer logic
    useEffect(() => {
        timerId.current = setInterval(() => {
            setTimeElapsed((prev) => prev + 1);
        }, 1000);
        return () => {
            if (timerId.current) {
                clearInterval(timerId.current);
            }
        };
    }, []);

    const handleWin = () => {
        if (timerId.current) {
            clearInterval(timerId.current);
        }
        setShowWinModal(true);
    };

    const resetGame = () => {
        setCorrectCount(0);
        setQuestionCount(0);
        setTimeElapsed(0);
        setCurrentQuestionIndex(0);
        setShowWinModal(false);
        if (timerId.current) {
            clearInterval(timerId.current);
        }
        timerId.current = setInterval(() => {
            setTimeElapsed((prev) => prev + 1);
        }, 1000);
    };

    const handleAnswer = (correct: boolean) => {
        setQuestionCount((prev) => prev + 1);

        if (correct) {
            setCorrectCount((prev) => {
                const newCount = prev + 1;
                if (newCount === 25) {
                    handleWin();
                }
                return newCount;
            });
        }

        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            handleWin();
        }

        setResetTrigger((prev) => !prev);
    };
if (!questions || questions.length === 0) { return <AppLoading />; } const currentQuestion = questions[currentQuestionIndex];
    return (
        <Surface style={styles.QuizScreen}>
            <View style={styles.timerContainer}>
                <Text style={[styles.timerText, ...TextStyles]}>Vrijeme: {timeElapsed}s</Text>
                <Text style={[styles.timerText, ...TextStyles]}>Točno: {correctCount}</Text>
                <Text style={[styles.timerText, ...TextStyles]}>Odgovoreno: {questionCount}</Text>
            </View>
            <Question
                goToNextQuestion={(correct) => handleAnswer(correct)}
                question={currentQuestion.question}
                options={currentQuestion.options}
                correctAnswer={currentQuestion.answer}
                resetTrigger={resetTrigger}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={showWinModal}
                onRequestClose={() => {}}
            >
                <View style={modalStyles.container}>
                    <Surface style={[modalStyles.modal, ...TextStyles]}>
                        <Text style={[modalStyles.title, ...TextStyles]}>Čestitamo!</Text>
                        <Text style={[modalStyles.text, ...TextStyles]}>
                            Završili ste za {timeElapsed} sekundi!
                        </Text>
                        <Button mode="contained" onPress={resetGame} style={modalStyles.button}>
                            Igraj Ponovno
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={() => navigation.navigate("Home")}
                            style={modalStyles.button}
                        >
                            Početna
                        </Button>
                    </Surface>
                </View>
            </Modal>
        </Surface>
    );
}

function Question(props: QuestionProps) {
    const colorScheme = useColorScheme();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [lockedIn, setLockedIn] = useState(false);
    const [buttonStyles, setButtonStyles] = useState<any[]>([]);
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText];

    useEffect(() => {
        setSelectedIndex(null);
        setLockedIn(false);
        setButtonStyles([]);
    }, [props.resetTrigger]);

    const handleAnswerSelect = (index: number) => {
        if (!lockedIn) {
            setSelectedIndex(index);
            setLockedIn(true);
            // Set button styles when an answer is selected
            const correctIndex = parseInt(props.correctAnswer, 10) - 1; // Correct index from JSON, adjusted for zero-based index
            const newButtonStyles = props.options.map((_, idx) => {
                if (idx === correctIndex) {
                    return { backgroundColor: 'green' }; // Green for correct answer
                }
                if (idx === index) {
                    return { backgroundColor: 'red' }; // Red for the selected answer
                }
                return {}; // Default style for unselected buttons
            });
            setButtonStyles(newButtonStyles);
        }
    };

    const handleNext = () => {
        if (selectedIndex !== null) {
            const isCorrect = selectedIndex === parseInt(props.correctAnswer, 10) - 1;
            props.goToNextQuestion(isCorrect);
        }
    };

    return (
        <Surface style={[styles.QuizSurface, ...TextStyles, { height: "100%" }]}>
            <Text style={[modalStyles.QuizText, modalStyles.quizQuestionStyle]}>
                {props.question}
            </Text>
            {props.options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.quizButtonStyle, buttonStyles[index]]} // Apply the conditional styles here
                    onPress={() => handleAnswerSelect(index)}
                    disabled={lockedIn} // Disable the button after an answer is selected
                >
                    <Text
                        numberOfLines={6} // Truncate after 3 lines
                        ellipsizeMode="tail" // Use ellipsis to truncate text
                        style={[TextStyles, { textAlign: 'center' }]} // Center the text
                    >
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}
            <Button
                onPress={handleNext}
                style={styles.goBackButton}
                disabled={selectedIndex === null}
                mode="contained"
            >
                <Text style={TextStyles}>Next</Text>
            </Button>
        </Surface>
    );
}

const modalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modal: {
        padding: 20,
        width: 300,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        marginVertical: 5,
        width: "100%",
    },
    quizButtonStyle: {
        height: 65,
        backgroundColor: "#3b3845",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        margin: 10,
        justifyContent: "space-around",
        marginTop: 30
    },
    QuizText: {
        color: "white",
        fontSize: 15,
        fontWeight: 400,
        textAlign: "center",
        fontFamily: "Roboto",
    },
    quizQuestionStyle: {
        backgroundColor: "#3b3845",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "space-around",
        padding: 15
    }
});

