import {View, Text, Button, useColorScheme} from "react-native";
import {styles} from "../styles";
import { RootStackParamList } from "./types";
import { StackNavigationProp } from '@react-navigation/stack';
import { Surface } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export default function ProfileScreen() {

    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]
    return (
            <Surface style={{height: "100%"}}>
                <SafeAreaView>
                    <Text style={[styles.settingsH1, ...TextStyles]}>Profile</Text>
                </SafeAreaView>  
            </Surface>
        
    )     
};

