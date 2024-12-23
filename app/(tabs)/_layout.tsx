import HomeScreen from "./index";
import SettingsScreen from "./settings";
import ProfileScreen from './profile';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "./logIn";
import QuizScreen from "./quiz";
import LeaderBoardScreen from "./leaderboard";
import ResourceScreen from "./resources";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {CommonActions, DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useColorScheme} from "@/hooks/useColorScheme";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {BottomNavigation, PaperProvider} from "react-native-paper";
import {Settings} from "react-native";

const Stack = createStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<RootStackParamList>();
  const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {

    let loggedIn = true
    // getItem("logged in").then((val)=>{loggedIn = val})
    console.log(loggedIn)
    const colorScheme = useColorScheme()
    if (!loggedIn) {
        return (
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"LogInScreen"}>
                    <Stack.Screen name="LogInScreen" component={LogInScreen} options={{headerShown: false}}/>
                </Stack.Navigator><StatusBar style="auto"/>
            </ThemeProvider>
        )
    }

    return (
        <MUINavigator />
    );
}


// export function BottomTabNavigator() {
//     const colorScheme = useColorScheme()
//     return (
//         <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//             <Tab.Navigator backBehavior={"history"}
//                            screenOptions={{ headerShown: false, tabBarStyle:{height:65} }}>
//                 <Tab.Screen name="Home" component={HomeScreen}  />
//                 <Tab.Screen name="Settings" component={SettingsScreen} />
//                 <Tab.Screen name="Profile" component={ProfileScreen} />
//             </Tab.Navigator>
//         </ThemeProvider>
//
// )
// }

export function MUINavigator() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline',},
        { key: 'settings', title: 'Settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
        { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        profile: ProfileScreen,
        settings: SettingsScreen,
    });

    const colorScheme = useColorScheme()

    return (
        <PaperProvider>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </PaperProvider>
    );
}