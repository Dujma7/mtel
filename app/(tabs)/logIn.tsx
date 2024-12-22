import {Image, StyleSheet, Platform, View, Text, useColorScheme} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";

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
      <View style={[colorScheme === 'dark' ? styles.darkMode : styles.lightMode, {height:"100%"}]}>
          <Text style = {[styles.settingsH1, ...TextStyles]}>Login</Text>
          <Text style = {styles.textH2}>Welcome back</Text>
      </View>
)};