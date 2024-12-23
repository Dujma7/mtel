import {View, Text} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";
import { TextInput, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function LogInScreen() {
  let [fontsLoaded] = useFonts({"Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
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