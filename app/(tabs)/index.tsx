import {Button, StyleSheet, View, Text, useColorScheme} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { RootStackParamList } from "./types";
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {styles} from "@/app/styles";
import {DarkTheme, DefaultTheme} from "@react-navigation/native";
import QuizScreen from "@/app/(tabs)/quiz";
import ResourceScreen from "@/app/(tabs)/resources";
import LeaderBoardScreen from "@/app/(tabs)/leaderboard";
import {Surface} from "react-native-paper";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};


export function HomeScreenUI({navigation}: HomeScreenProps) {

  let [fontsLoaded] = useFonts({"Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
  });
  const colorScheme = useColorScheme();
  const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
        <Surface style={{height:"100%"}}>
          <Text style = {[_styles.textUser, ...TextStyles]}>Hello, User!</Text>
          <Text style = {[_styles.textH2, ...TextStyles]}>Welcome back</Text>
          <Button title="Quiz" onPress={() => navigation.navigate("QuizScreen")}/>
          <Button title="Leaderboard" onPress={() => navigation.navigate("LeaderboardScreen")}/>
          <Button title="Resources" onPress={() => navigation.navigate("ResourceScreen")}/>
        </Surface>
)};


const _styles = StyleSheet.create({
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
const Stack = createStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={"Home"} component={HomeScreenUI} />
      <Stack.Screen name={"QuizScreen"} component={QuizScreen} />
      <Stack.Screen name={"LeaderboardScreen"} component={LeaderBoardScreen} />
      <Stack.Screen name={"ResourceScreen"} component={ResourceScreen} />
    </Stack.Navigator>
  )
}