import {View, Text, Button} from "react-native";
import {styles} from "../styles";
import { RootStackParamList } from "./types";
import { StackNavigationProp } from '@react-navigation/stack';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export function ProfileScreen({navigation}:HomeScreenProps) {
    return (
        <View style = {styles.container}>
            <Text style={styles.settingsH1}>Profile</Text>
            <Button title="Login" onPress={() => navigation.navigate("LogInScreen")}/>
        </View>
    )
};

