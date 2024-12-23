<<<<<<< HEAD
import {View, Text} from 'react-native';
=======
import {Image, StyleSheet, Platform, View, Text, useColorScheme} from 'react-native';
>>>>>>> 3365da5f0bef548e5b487ce7f1ac3211fa58ba28
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";
import { TextInput, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function LogInScreen() {
  let [fontsLoaded] = useFonts({"Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
  });


    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
<<<<<<< HEAD
    <ScrollView style={styles.container}>
      <View style = {styles.container}>
        <Text style = {styles.LogInH1}>Sign in</Text>
        <TextInput label="E-mail" style={styles.input} underlineColor="white" placeholder='Enter E-mail' />
        <TextInput label="Password" style={styles.input} secureTextEntry={true} placeholder='Enter password' />
        <Button style={styles.btnSubmit} mode="contained" onPress={() => alert("Hello") }>Log in</Button>
      <View style={styles.containerLogIn}>
        <Button style={styles.register}  textColor="#213555">Register</Button>
        <Button style={styles.register} textColor="#213555">Forgot password</Button>
      </View>
      </View>
    </ScrollView>
  )};  
=======
      <View style={[colorScheme === 'dark' ? styles.darkMode : styles.lightMode, {height:"100%"}]}>
          <Text style = {[styles.settingsH1, ...TextStyles]}>Login</Text>
          <Text style = {styles.textH2}>Welcome back</Text>
      </View>
)};
>>>>>>> 3365da5f0bef548e5b487ce7f1ac3211fa58ba28
