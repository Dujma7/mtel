import {Text, useColorScheme} from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";
import {TextInput, Button, Surface, MD3DarkTheme, MD3LightTheme, Divider} from 'react-native-paper';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/app/(tabs)/types";
import {getUserData, login} from "@/utils/apiIntegration";
import {useRef, useState} from "react";
import {getItem, setItem} from "expo-secure-store"
import { reloadAsync } from 'expo-updates';

type LogInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type LogInScreenProps = {
    navigation: LogInScreenNavigationProp;
};


function handleLoginClick(email: string, password: string, navigationProp: StackNavigationProp<RootStackParamList, 'Home'>, setEmailError:(str:string)=>void, setPasswordError:(str:string)=>void) {
    let success = false
    login(email, password).then((res) => {
        switch (res.status){
            case"200":{
                setItem("token", res.token)
                getUserData(res.token).then((data)=>{
                    alert("f")
                    switch(data.status){
                        case "200":{
                            setItem("username", data.username)
                            setItem("email", data.email)
                            success = true
                            reloadAsync()
                            break
                        }
                        default:{
                            setEmailError("Netočni podatci za prijavu")
                            setPasswordError("error")
                        }
                    }
                })
                break
            }
            default:{
                setEmailError("Netočni podatci za prijavu")
                setPasswordError("error")
            }
        }
    })
}

export default function LogInScreen({navigation}: LogInScreenProps) {
    let [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    });


    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]

    const [emailTextValue, setEmailTextValue] = useState("")
    const [passwordTextValue, setPasswordTextValue] = useState("")
    const [emailErrorValue, setEmailErrorValue] = useState("")
    const [passwordErrorValue, setPasswordErrorValue] = useState("")

    if (!fontsLoaded) {
        return <AppLoading/>;
    }
    return (
        <Surface style={{height: "100%", justifyContent:"center"}}>
            <Text style={[styles.LogInH1, ...TextStyles]}>Prijava</Text>
            <Text style={[styles.errortext]}>{emailErrorValue}</Text>
            <TextInput autoCapitalize='none' error={emailErrorValue!=""} value={emailTextValue} onChangeText={text => setEmailTextValue(text)} label="E-mail" style={styles.input} underlineColor="white" placeholder='Upišite E-mail'/>
            <TextInput autoCapitalize='none' error={passwordErrorValue!=""} value={passwordTextValue} onChangeText={text => setPasswordTextValue(text)} label="Šifra" style={styles.input} secureTextEntry={true} placeholder='Upišite šifru'/>
            <Button style={styles.btnSubmit} mode="contained" onPress={() => handleLoginClick(emailTextValue, passwordTextValue, navigation, setEmailErrorValue, setPasswordErrorValue)}>Log in</Button>
            <Text style={[styles.ptext]} onPress={() => {navigation.navigate("SignUpScreen")}}>Nemate račun? Napravite ga ovdje.</Text>
        </Surface>
    )
};
