import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Button, useTheme, Surface, MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
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
        <PaperProvider>
                <Surface style={[styles.QuizScreen, {backgroundColor:Theme.colors.background, height:"100%"}]} elevation={0}>
                    <SafeAreaView>
                        <Text style={[styles.leaderboardH1, ...TextStyles]}>Izaberi  kviz</Text>
                        <Text style={[styles.QuizSelectTextTop, ...TextStyles]}>Izaberi vrstu kviza koji želiš uraditi!</Text>
                        <Surface style={styles.HomeSurface} elevation={5}>
                            <TouchableOpacity activeOpacity={0.3} style={styles.ButtonStyle} onPress={() => navigation.navigate("QuizScreen")}> 
                                <Text style={[styles.SelectText, ...TextStyles]}>Znakovi</Text>
                            </TouchableOpacity>
                        </Surface>
                        <Surface elevation={5} style={styles.HomeSurface}>
                            <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.navigate("QuizScreenB")} >
                                <Text style={[styles.SelectText, ...TextStyles]}>Klasa B</Text>
                            </TouchableOpacity>
                        </Surface>
                    </SafeAreaView>
                </Surface>
        </PaperProvider>
    )
    
};
const Stack = createStackNavigator<QuizBranchParamList>();

export default function HomeScreen() {
    const colorScheme = useColorScheme()
    const bgcolor = colorScheme === "dark" ? MD3DarkTheme.colors.background : MD3LightTheme.colors.background
    return (
        <Stack.Navigator screenOptions={{headerShown: false, headerStyle: {backgroundColor: bgcolor}}}>
            <Stack.Screen name={"QuizHome"} component={QuizSelectScreen}/>
            <Stack.Screen name={"QuizScreen"} component={QuizScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"QuizScreenB"} component={QuizScreenB} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
