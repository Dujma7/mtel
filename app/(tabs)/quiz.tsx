import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Button, useTheme, Surface } from "react-native-paper";
import { useFonts } from "expo-font";
// @ts-ignore
import AppLoading from 'expo-app-loading';
import { styles } from "../styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SignsMeaningAndImage } from "@/assets/signImages/signsMeaningAndImage2";
import {submitRun} from "@/utils/apiIntegration";

type QuestionProps = {
    goToNextQuestion: (correct: boolean) => void;
    answers: Array<string>;
    correctIndex: number;
    questionImage: any;
};

type NavigationProp = {
    navigate: (screen: string) => void;
};

export default function QuizScreen({ navigation }: { navigation: NavigationProp }) {
    const getRandomValue = (dict: Record<string, any>) => {
        const values = Object.values(dict);
        return values[Math.floor(values.length * Math.random())];
    };

    let [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    });

    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === "dark" ? styles.lightText : styles.darkText];

    const get4randomKeys = (dict: Object) => {
        let keys = Object.keys(dict);
        let out = [];
        for (let i = 0; i < 4; i++) {
            let selected = getRandomValue(keys);
            out.push(selected);
            keys = keys.filter((key) => key !== selected);
        }
        return out;
    };

    const [answers, setAnswers] = useState<string[]>(get4randomKeys(SignsMeaningAndImage));
    const [currentKey, setCurrentKey] = useState<string>(getRandomValue(answers));
    const [quizImage, setQuizImage] = useState(SignsMeaningAndImage[currentKey]);
    const [unUsedKeys, setUnUsedKeys] = useState(Object.keys(SignsMeaningAndImage));
    const [correctCount, setCorrectCount] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [showWinModal, setShowWinModal] = useState(false);

    // States to reset selection on question change
    const [resetTrigger, setResetTrigger] = useState(false);

    // Ref to store timer ID
    const timerId = useRef<NodeJS.Timeout | null>(null);

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

    const handleWin = (time: number) => {
        if (timerId.current) {
            clearInterval(timerId.current); // Stop the timer when the user wins
        }
        submitRun(timeElapsed).then(r => console.log(r));
        setShowWinModal(true); // Show the win modal
    };

    const resetGame = () => {
        setCorrectCount(0);
        setQuestionCount(0);
        setTimeElapsed(0);
        setUnUsedKeys(Object.keys(SignsMeaningAndImage));
        const _answers = get4randomKeys(SignsMeaningAndImage);
        const _correctKey = getRandomValue(_answers);
        setAnswers(_answers);
        setCurrentKey(_correctKey);
        setQuizImage(SignsMeaningAndImage[_correctKey]);
        setShowWinModal(false); // Close the modal

        // Restart the timer
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
                    handleWin(timeElapsed); // Call handleWin when the user reaches 25 correct answers
                }
                return newCount;
            });

            // Remove the current question from the pool only if the answer is correct
            const _unused = unUsedKeys.filter((key) => key !== currentKey);
            setUnUsedKeys(_unused);
        }

        // Load new question regardless of correctness
        const _answers = get4randomKeys(SignsMeaningAndImage);
        const _correctKey = getRandomValue(_answers);
        setAnswers(_answers);
        setCurrentKey(_correctKey);
        setQuizImage(SignsMeaningAndImage[_correctKey]);

        // Trigger a reset of the question state
        setResetTrigger((prev) => !prev);
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Surface style={styles.QuizScreen}>
            <View style={styles.timerContainer}>
                <Text style={[styles.timerText, ...TextStyles]}>Vrijeme: {timeElapsed}s</Text>
                <Text style={[styles.timerText, ...TextStyles]}>Točno: {correctCount}</Text>
                <Text style={[styles.timerText, ...TextStyles]}>Odgovoreno: {questionCount}</Text>
            </View>
            <Question
                goToNextQuestion={(correct) => handleAnswer(correct)}
                questionImage={quizImage}
                answers={answers}
                correctIndex={answers.indexOf(currentKey)}
                resetTrigger={resetTrigger} // Pass the reset trigger to reset the question state
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

function Question(props: QuestionProps & { resetTrigger: boolean }) {
    const colorScheme = useColorScheme();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [lockedIn, setLockedIn] = useState(false);
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText];
    const theme = useTheme();

    useEffect(() => {
        setSelectedIndex(null);
        setLockedIn(false);
    }, [props.resetTrigger]);

    const handleAnswerSelect = (index: number) => {
        if (!lockedIn) {
            setSelectedIndex(index);
            setLockedIn(true);
        }
    };

    const handleNext = () => {
        if (selectedIndex !== null) {
            const isCorrect = selectedIndex === props.correctIndex;
            props.goToNextQuestion(isCorrect);
        }
    };

    return (
        <Surface style={[styles.QuizSurface, ...TextStyles]} elevation={0}>
            <Text style={styles.questionH1}>Koje je značenje znaka?</Text>
            <Image style={styles.QuizImage} source={props.questionImage} />
            <View style={[styles.QuizSurface, ...TextStyles]}>
                {props.answers.map((answer, index) => {
                    const isSelected = selectedIndex === index;
                    const isCorrect = selectedIndex === props.correctIndex;
                    const backgroundColor = lockedIn
                        ? isSelected
                            ? isCorrect
                                ? 'green'
                                : 'red'
                            : theme.colors.surface
                        : theme.colors.surface;

                    return (
                        <Surface
                            key={answer}
                            style={[
                                styles.quizButtonStyle,
                                { backgroundColor },
                            ]}
                        >
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => handleAnswerSelect(index)}
                                disabled={lockedIn}
                            >
                                <Text
                                    style={[
                                        styles.quizButtonText,
                                        isSelected && lockedIn && { color: 'white' },
                                    ]}
                                >
                                    {answer}
                                </Text>
                            </TouchableOpacity>
                        </Surface>
                    );
                })}
            </View>
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
        borderRadius: 10,
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
});
