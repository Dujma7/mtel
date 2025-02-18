import {View, Text,useColorScheme, TouchableOpacity, GestureResponderEvent} from "react-native";
import { Button, Divider } from "react-native-paper";
import {styles} from "../styles";
import { RootStackParamList } from "./types";
import { StackNavigationProp } from '@react-navigation/stack';
import { Surface } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { reloadAsync } from "expo-updates";
import { setItem, getItem } from "expo-secure-store";

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
                <Text style={[styles.profileText]}>Korisničko ime:</Text>
                <Text style={[styles.profileText]}>{getItem("username")}</Text>
                <Surface style={{height:"5%"}} children={undefined}/>
                <Text style={styles.profileText}>E-mail:</Text>
                <Text style={styles.profileText}>{getItem("email")}</Text>
                <Surface style={{height:"10%"}} children={undefined}/>
                <Button mode="contained" onPress={handleLogout} style={[TextStyles, {marginVertical: 30, marginHorizontal:80}]} >Odjavi se</Button>
            </SafeAreaView>  
        </Surface>  
    )     
};

