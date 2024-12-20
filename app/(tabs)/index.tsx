import { Image,Button, StyleSheet, Platform, View, Text} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { RootStackParamList } from "./types";
import { StackNavigationProp } from '@react-navigation/stack';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};



export function HomeScreen({navigation}: HomeScreenProps) {

  let [fontsLoaded] = useFonts({"Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style = {styles.container}>
      <Text style = {styles.textUser}>Hello, User!</Text>
      <Text style = {styles.textH2}>Welcome back</Text>
      <Button title="Quiz" onPress={() => navigation.navigate("QuizScreen")}/>
      <Button title="Leaderboard" onPress={() => navigation.navigate("LeaderboardScreen")}/>
      <Button title="Resources" onPress={() => navigation.navigate("ResourceScreen")}/>
    </View>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex", 
    backgroundColor: "white",
    textAlign: "center",
  },
  textUser: {
    textAlign: "left",
    color: "black",
    fontSize: 50,
    paddingTop: 50,
    padding: 20,
    paddingBottom: 5,
    fontFamily: "Roboto-Bold",
  },
  textH2: {
    textAlign: "left",
    color: "black",
    fontSize: 25,
    padding: 20,
    paddingTop: 0,
    fontFamily: "Roboto-Thin",}
});
