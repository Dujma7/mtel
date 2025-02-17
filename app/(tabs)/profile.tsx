import {View, Text,useColorScheme, TouchableOpacity, GestureResponderEvent} from "react-native";
import { Button } from "react-native-paper";
import {styles} from "../styles";
import { RootStackParamList } from "./types";
import { StackNavigationProp } from '@react-navigation/stack';
import { Surface } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { reloadAsync } from "expo-updates";
import { setItem, getItem } from "expo-secure-store";
import { reloadAppAsync } from "expo";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

function handleLogout(e: GestureResponderEvent) {
    setItem("token", "")
    reloadAsync()
}

export default function ProfileScreen() {

    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]
    return (
            <Surface style={{height: "100%", paddingTop: 100}}>
                <SafeAreaView>
                        <Text style={[styles.profileText]}>Korisničko ime: {getItem("username")}</Text>
                        <Text style={styles.profileText}>E-mail: {getItem("email")}</Text>
                        <Button mode="text" onPress={handleLogout} style={[TextStyles, {marginTop: 20}]} >Odjavi se</Button>
                </SafeAreaView>  
            </Surface>  
    )     
};

