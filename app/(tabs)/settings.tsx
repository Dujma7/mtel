import { Image,Switch, Button, StyleSheet, ScrollView, Platform, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from "react";
import { styles } from '../styles';



export default function SettingsScreen() {

    
    const [isEnabled, setIsEnabled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState("Theme");
    const ViewStyles = [isEnabled ? styles.darkMode  : styles.lightMode]
    const TextStyles = [isEnabled ? styles.lightText : styles.darkText]
    const toggleSwitch = () => {
        if (isEnabled) {
            setIsDarkMode("Light mode")
        }
        else {
            setIsDarkMode("Dark mode")
        }

        setIsEnabled(previousState => !previousState)
    }
    return (
      <ScrollView style = {[styles.container,...ViewStyles]}>
        <Text style = {[styles.settingsH1, ...TextStyles]}>Settings</Text>
        <View style={styles.setting}>
            <Text style={[styles.hr, ...TextStyles]}></Text>
        </View>

        <View style= {styles.setting}>
                <Image style ={[styles.imageUser]} source={isEnabled ? require("../../assets/images/userLight.png") : require("../../assets/images/user.png")}/>
                <Text style={[styles.textH2, styles.profileTxt, ...TextStyles]}>Profile</Text>
            
        </View>
        <View style={styles.setting}>
            <Text style={[styles.hr, ...TextStyles]}></Text>
        </View>

        <View style = {styles.setting}>
            <Switch
            trackColor = {{false: "grey", true: "green"}}
            thumbColor={isEnabled ? "white": "white"}
            onValueChange={toggleSwitch}
            value={isEnabled} />
            <Text style = {[styles.textH2, ...TextStyles]}>{isDarkMode}</Text>
        </View>
        <View style= {styles.setting}>
            <Text style={[styles.textH2, ...TextStyles]}>Language</Text>
        </View>

        <View style={styles.setting}>
            <Text style={[styles.hr, ...TextStyles]}></Text>
        </View>
        
      </ScrollView>
    )
  }


