import {Text, useColorScheme} from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";
import {TextInput, Button, Surface, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/app/(tabs)/types";

type LogInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type LogInScreenProps = {
    navigation: LogInScreenNavigationProp;
};

export default function LogInScreen({navigation}: LogInScreenProps) {
    let [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    });


    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]

    if (!fontsLoaded) {
        return <AppLoading/>;
    }
    return (
        <Surface style={{height: "100%"}}>
            <Text style={[styles.LogInH1, ...TextStyles]}>Prijava</Text>
            <TextInput label="E-mail" style={styles.input} underlineColor="white" placeholder='Upišite E-mail'/>
            <TextInput label="Šifra" style={styles.input} secureTextEntry={true} placeholder='Upišite šifru'/>
            <Button style={styles.btnSubmit} mode="contained" onPress={() => alert("Hello")}>Log in</Button>
            <Text style={[...TextStyles]} onPress={() => {navigation.navigate("SignUpScreen")}}>Register</Text>
        </Surface>
    )
};
