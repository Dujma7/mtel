import {StyleSheet, Platform, View, Text, Image} from 'react-native';
import {Button} from "react-native-paper";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";
import {Surface} from "react-native-paper";
import {useColorScheme} from "@/hooks/useColorScheme";

export default function QuizScreen() {
  let [fontsLoaded] = useFonts({"Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
  });

  const colorScheme = useColorScheme()
    const TextStyles = [colorScheme === "dark" ? styles.lightText : styles.darkText]

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Surface style = {styles.QuizSurface}>
        <Text style={styles.QuizQuestion}>Lorem ipsum dolor sit amet?</Text>
        <Image style={styles.QuizImage} source={require("../../assets/images/react-logo.png")} />
      <View style = {[styles.QuizSurface,...TextStyles]}>
          <Button style={styles.QuizAnswers} onPress={() => alert("Kliknuo si odgovor 1")} mode="contained-tonal" >Odgovor 1</Button>
          <Button style={styles.QuizAnswers} onPress={() => alert("Kliknuo si odgovor 2")} mode="contained-tonal" >Odgovor 2</Button>
          <Button style={styles.QuizAnswers} onPress={() => alert("Kliknuo si odgovor 3")} mode="contained-tonal" >Odgovor 3</Button>
          <Button style={styles.QuizAnswers} onPress={() => alert("Kliknuo si odgovor 4")} mode="contained-tonal" >Odgovor 4</Button>
      <Surface style={{display: "flex", flexDirection: "row", flex: 1, margin: 10}}>
        <Button style={[styles.goBackButton]} onPress={()=> alert("Prijasnje pitanje")} mode="contained-tonal" >Natrag</Button>
        <Button style={[styles.goBackButton]} onPress={()=> alert("Iduce pitanje")} mode="contained-tonal" >Naprijed</Button>
      </Surface>
      </View>
       
    </Surface>
)};