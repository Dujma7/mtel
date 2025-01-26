import {View, Text,useColorScheme, TouchableOpacity} from "react-native";
import { Button } from "react-native-paper";
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
            <Surface style={{height: "100%", paddingTop: 100}}>
                <SafeAreaView>
                        <Text style={[styles.profileText]}>Korisničko ime: username</Text>
                        <Text style={styles.profileText}>E-mail: example@gmail.com</Text>
                                <TouchableOpacity style={styles.profileLogOut} activeOpacity={0.5} onPress={() => alert("Log out")}>
                                    <Text style={styles.LogOutText}>Log Out</Text>
                                </TouchableOpacity>
                        
                </SafeAreaView>  
            </Surface>  
    )     
};

