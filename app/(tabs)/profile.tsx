import {View, Text,useColorScheme} from "react-native";
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
            <Surface style={{height: "100%", justifyContent: "center"}}>
                <SafeAreaView>
                    <Surface>
                        <Text style={[styles.profileText, {marginTop: 100}]}>Ime: Michael Jordan</Text><Button mode="outlined" style={styles.profileButtonChange} onPress={() => alert("Promijeni ime")}>Promijeni ime</Button>
                        <Text style={styles.profileText}>E-mail: michaeljordan@gmail.com</Text><Button mode="outlined" style={styles.profileButtonChange} onPress={() => alert("Promijeni mail")}>Promijeni mail</Button>
                        <Text style={styles.profileText}>Zaporka: ***********</Text><Button mode="outlined" style={styles.profileButtonChange} onPress={() => alert("Promijeni zaporku")}>Promijeni zaporku</Button>
                        <Button style={styles.profileButtonSubmit} mode="outlined" onPress={() => alert("Promjene spremljene!")}>Spremi promjene</Button>
                    </Surface>
                </SafeAreaView>  
            </Surface>  
    )     
};

