import { HomeScreen } from "./index";
import { SettingsScreen } from "./settings";
import { ProfileScreen } from './profile';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LogInScreen } from "./logIn";
import { NavigationContainer } from "@react-navigation/native";
import { Quizcreen } from "./quiz";
import { LeaderBoardScreen } from "./leaderboard";
import { ResourceScreen } from "./resources";
  const Stack = createStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator<RootStackParamList>();

  export default function App() {
    return (
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Tabs" component={BottomTabNavigator}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="LogInScreen" component={LogInScreen} />
          <Stack.Screen name="QuizScreen" component={Quizcreen} />
          <Stack.Screen name="LeaderboardScreen" component={LeaderBoardScreen} />
          <Stack.Screen name="ResourceScreen" component={ResourceScreen} />
        </Stack.Navigator>
    );
  }
  export function BottomTabNavigator() {
    return (

        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      
    )
  }