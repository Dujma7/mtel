import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Button, useTheme, Surface } from "react-native-paper";
import { useFonts } from "expo-font";
// @ts-ignore
import AppLoading from 'expo-app-loading';
import {styles} from "../styles";
import {Surface} from "react-native-paper";
import {useColorScheme} from "@/hooks/useColorScheme";
import {SignsMeaningAndImage} from "../../assets/signImages/signsMeaningAndImage";
import { useState , useEffect} from 'react';


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

    const [currentKey, setCurrentKey] = useState<string>(Object.keys(SignsMeaningAndImage)[0]);

    const switchImage = () => {
      const keys = Object.keys(SignsMeaningAndImage);
      const randomIndex = Math.floor(Math.random() * keys.length);
      setCurrentKey(keys[randomIndex]);
      console.log(Object.keys(SignsMeaningAndImage)[7])
    }
    var a = "../../assets/signImages/znakoviSlike/"+Object.values(SignsMeaningAndImage)[7]+'"'
    if (!fontsLoaded) {
        return <AppLoading />;
    }
  return (
      <Surface style = {styles.QuizSurface}>
        <Text style={styles.QuizQuestion}>Lorem ipsum dolor sit amet?</Text>

        <Image style={styles.QuizImage} source={require(a)} />
          <View style = {[styles.QuizSurface,...TextStyles]}>
          <Button style={styles.QuizAnswers} onPress={switchImage} mode="contained-tonal" >Odgovor 1</Button>
        <Image style={styles.QuizImage} source={reactLogo} />
        <View style = {[styles.QuizSurface,...TextStyles]}>
          <Button style={styles.QuizAnswers} onPress={() => alert("Kliknuo si odgovor 1")} mode="contained-tonal" >Odgovor 1</Button>
          <Button style={styles.QuizAnswers} onPress={() => alert("Kliknuo si odgovor 2")} mode="contained-tonal" >Odgovor 2</Button>
          <Button style={styles.QuizAnswers} onPress={() => alert("Kliknuo si odgovor 3")} mode="contained-tonal" >Odgovor 3</Button>
          <Button style={styles.QuizAnswers} onPress={() => alert("Kliknuo si odgovor 4")} mode="contained-tonal" >Odgovor 4</Button>
          <Surface style={{display: "flex", flexDirection: "row", flex: 1, margin: 10}}>
            <Button style={[styles.goBackButton]} onPress={()=> alert("Iduce pitanje")} mode="contained-tonal" >Naprijed</Button>
          </Surface>
        </View>
        </View>

      </Surface>
  )};