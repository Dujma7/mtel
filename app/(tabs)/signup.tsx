import React, { useState } from 'react';
import { Text, useColorScheme } from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { styles } from "../styles";
import { TextInput, Button, Surface } from 'react-native-paper';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)/types";
import { signup } from '@/utils/apiIntegration';
import { setItem } from 'expo-secure-store';
import { reloadAsync } from 'expo-updates';

type LogInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type LogInScreenProps = {
    navigation: LogInScreenNavigationProp;
};

function handleSignup(username: string, email: string, password: string, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) {
    signup(email, username, password).then(res => {
        switch (res.status) {
            case "200": {
                setItem("token", res.token);
                reloadAsync();
                break;
            }
            case "409": {
                if (res.conflict == "username") {
                    setErrorMessage("Korisničko ime zauzeto");
                    break;
                }
                if (res.conflict == "email") {
                    setErrorMessage("Email već iskorišten");
                    break;
                }
                break;
            }
            default: {
                setErrorMessage("Nešto je pošlo po zlu?");
            }
        }
    });
}

// Regex for validating email
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// Password validation: at least 8 characters, one uppercase, one lowercase, one number, one special character
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export default function SignUpScreen({ navigation }: LogInScreenProps) {
    let [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText];

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const validateInputs = () => {
        if (!username) {
            setErrorMessage("Korisničko ime je obavezno");
            return false;
        }
        if (!emailRegex.test(email)) {
            setErrorMessage("Unesite valjan email");
            return false;
        }
        if (!passwordRegex.test(password)) {
            setErrorMessage("Šifra mora imati barem 8 znakova, jedno veliko slovo, jedno malo slovo i broj");
            return false;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Šifre se ne podudaraju");
            return false;
        }
        return true;
    };

    const handleFormSubmit = () => {
        setErrorMessage('');
        if (validateInputs()) {
            handleSignup(username, email, password, setErrorMessage);
        }
    };

    return (
        <Surface style={{ height: "100%", justifyContent: "center", padding: 20 }}>
            <Text style={[styles.LogInH1, ...TextStyles]}>Napravite Račun</Text>

            {errorMessage ? (
                <Text style={[{ textAlign: 'center', color: 'red', marginBottom: 20 }]}>
                    {errorMessage}
                </Text>
            ) : null}

            <TextInput
                autoCapitalize="none"
                label="Odaberite korisničko ime"
                style={styles.input}
                underlineColor="white"
                placeholder="Odaberite korisničko ime"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                autoCapitalize="none"
                label="Upišite svoj E-mail"
                style={styles.input}
                underlineColor="white"
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                autoCapitalize="none"
                label="Odaberite Šifru"
                style={styles.input}
                secureTextEntry={true}
                placeholder="Šifra"
                value={password}
                onChangeText={setPassword}
            />

            <TextInput
                autoCapitalize="none"
                label="Ponovno upišite šifru"
                style={styles.input}
                secureTextEntry={true}
                placeholder="Šifra"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <Button
                style={styles.btnSubmit}
                mode="contained"
                onPress={handleFormSubmit}
            >
                Dalje
            </Button>

            <Text
                style={[styles.ptext, ...TextStyles]}
                onPress={() => { navigation.navigate("LogInScreen"); }}
            >
                Imate račun? Prijavite se ovdje.
            </Text>
        </Surface>
    );
};

