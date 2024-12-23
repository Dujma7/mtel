import { Image, StyleSheet, Platform, View, Text} from 'react-native';
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
    <Surface style = {{height:"100%"}}>
      <Text style = {[styles.settingsH1, ...TextStyles]}>Quiz</Text>
      <Text style = {styles.textH2}>Welcome back</Text>
    </Surface>
)};