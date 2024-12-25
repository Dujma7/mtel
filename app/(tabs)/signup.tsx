import {View, Text, useColorScheme} from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";
import {TextInput, Button, Surface, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/app/(tabs)/types";

type LogInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type LogInScreenProps = {
    navigation: LogInScreenNavigationProp;
};

export default function SignUpScreen({navigation}: LogInScreenProps) {
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
            <Text style={[styles.LogInH1, ...TextStyles]}>Napravite Račun</Text>
            <TextInput label="Odaberite korisničko ime" style={styles.input} underlineColor="white" placeholder='Odaberite korisničko ime'/>
            <TextInput label="Upišite svoj E-mail" style={styles.input} underlineColor="white" placeholder='E-mail'/>
            <TextInput label="Odaberite Šifru" style={styles.input} secureTextEntry={true} placeholder='Šifra'/>
            <TextInput label="Ponovno upišite šifru" style={styles.input} secureTextEntry={true} placeholder='Šifra'/>
            <Button style={styles.btnSubmit} mode="contained" onPress={() => alert("Hello")}>Dalje</Button>
            <Text style={[...TextStyles]} onPress={() => {
                navigation.navigate("LogInScreen")
            }}>Login</Text>
        </Surface>
    )
};