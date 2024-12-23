import {StyleSheet, View, Text, useColorScheme} from 'react-native';
import { Button } from "react-native-paper";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { RootStackParamList } from "./types";
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {styles} from "@/app/styles";
import QuizScreen from "@/app/(tabs)/quiz";
import ResourceScreen from "@/app/(tabs)/resources";
import LeaderBoardScreen from "@/app/(tabs)/leaderboard";
import {MD3DarkTheme, MD3LightTheme, Surface} from "react-native-paper";
import {DarkTheme} from "@react-navigation/native";

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
    const Theme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
        <Surface style={{height:"100%"}}>
          <Text style = {[_styles.textUser, ...TextStyles]}>Hello, User!</Text>
          <Text style = {[_styles.textH2, ...TextStyles]}>Welcome back</Text>
          <Button onPress={() => navigation.navigate("QuizScreen")} mode={"outlined"}>Quiz</Button>
          <Button onPress={() => navigation.navigate("LeaderboardScreen")} mode={"outlined"}>Leaderboard</Button>
          <Button onPress={() => navigation.navigate("ResourceScreen")} mode={"outlined"}>Resources</Button>
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
    const colorScheme = useColorScheme()
    const bgcolor = colorScheme === "dark" ? MD3DarkTheme.colors.background :"fff"
  return (
    <Stack.Navigator screenOptions={{headerShown: false, headerStyle:{backgroundColor:bgcolor}}}>
      <Stack.Screen name={"Home"} component={HomeScreenUI} />
      <Stack.Screen name={"QuizScreen"} component={QuizScreen} options={{headerShown: true}}/>
      <Stack.Screen name={"LeaderboardScreen"} component={LeaderBoardScreen} options={{headerShown: true}}/>
      <Stack.Screen name={"ResourceScreen"} component={ResourceScreen} options={{headerShown: true}}/>
    </Stack.Navigator>
  )
}