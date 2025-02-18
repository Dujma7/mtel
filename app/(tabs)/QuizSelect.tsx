import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Button, useTheme, Surface, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { useFonts } from "expo-font";
// @ts-ignore
import AppLoading from 'expo-app-loading';
import { styles } from "../styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizScreen from './quiz';
import { QuizBranchParamList } from './types';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import QuizScreenB from './quizB';
import { ScrollView } from 'react-native-gesture-handler';

type QuizBranchNavigationProp = StackNavigationProp<QuizBranchParamList, "QuizHome">
type QuizBranchProps = {
    navigation: QuizBranchNavigationProp;
};

export function QuizSelectScreen({navigation}: QuizBranchProps) {
    
    let [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    });
    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]
    const Theme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme

    if (!fontsLoaded) {
        return <AppLoading/>;
    }
    return (
        <ScrollView>
            <Surface style={[styles.QuizSurface, {height: "100%"}]}>
                <SafeAreaView>
                    <Text style={styles.leaderboardH1}>Izaberi  kviz</Text>
                    <Text style={styles.QuizSelectTextTop}>Izaberi vrstu kviza koji želiš uraditi!</Text>
                    <TouchableOpacity activeOpacity={0.3} style={styles.SelectSurface} onPress={() => navigation.navigate("QuizScreen")}> 
                        <Text style={styles.SelectText}>Znakovi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.3} disabled={true} style={styles.SelectSurfaceDisabled} >
                        <Text style={styles.SelectText}>Klasa A</Text>
                        <Text style={styles.SelectSubText}>Dolazi uskoro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.navigate("QuizScreenB")} style={styles.SelectSurface}>
                        <Text style={styles.SelectText}>Klasa B</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Surface>
        </ScrollView>
    )
    
};
const Stack = createStackNavigator<QuizBranchParamList>();

export default function HomeScreen() {
    const colorScheme = useColorScheme()
    const bgcolor = colorScheme === "dark" ? MD3DarkTheme.colors.background : "fff"
    return (
        <Stack.Navigator screenOptions={{headerShown: false, headerStyle: {backgroundColor: bgcolor}}}>
            <Stack.Screen name={"QuizHome"} component={QuizSelectScreen}/>
            <Stack.Screen name={"QuizScreen"} component={QuizScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"QuizScreenB"} component={QuizScreenB} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
