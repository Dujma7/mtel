import { Image,Switch, Button, StyleSheet, ScrollView, Platform, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from "react";
import { styles } from '../styles';
import {useColorScheme} from "@/hooks/useColorScheme";
import {Surface} from "react-native-paper";



export default function SettingsScreen() {

    const colorScheme = useColorScheme()
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
    const ViewStyles = [isDarkMode ? styles.darkMode  : styles.lightMode]
    const TextStyles = [isDarkMode ? styles.lightText : styles.darkText]
    return (
        <Surface style={{height:"100%"}}>
          <ScrollView>
            <Text style = {[styles.settingsH1, ...TextStyles]}>Settings</Text>
                <Text style={[styles.hr, ...TextStyles]}></Text>

          </ScrollView>
        </Surface>
    )
  }


