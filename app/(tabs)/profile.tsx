import {View, Text, Button, useColorScheme} from "react-native";
import {styles} from "../styles";
import { RootStackParamList } from "./types";
import { StackNavigationProp } from '@react-navigation/stack';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export default function ProfileScreen() {

    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]
    return (
        <View style = {styles.container}>
            <Text style={[styles.settingsH1, ...TextStyles]}>Profile</Text>
        </View>
    )
};

