import {StyleSheet, Image, Text, useColorScheme, TouchableOpacity} from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {RootStackParamList} from "./types";
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {styles} from "@/app/styles";
import QuizScreen from "@/app/(tabs)/quiz";
import ResourceScreen from "@/app/(tabs)/resources";
import LeaderBoardScreen from "@/app/(tabs)/leaderboard";
import {MD3DarkTheme, MD3LightTheme, Surface} from "react-native-paper";
import {SafeAreaView } from 'react-native-safe-area-context';
import { getItem } from 'expo-secure-store';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
};


export function HomeScreenUI({navigation}: HomeScreenProps) {

    let [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    });
    const colorScheme = useColorScheme();
    const TextStyles = [colorScheme === 'dark' ? styles.lightText : styles.darkText]
    const Theme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme

    if (!fontsLoaded) {
        return <AppLoading/>;
    }
    return (
        <Surface style={{height: "100%"}}>
            <SafeAreaView>
                <Text style={[_styles.textUser, ...TextStyles]}>Pozdrav, {getItem("username")}!</Text>
                <Text style={[_styles.textH2, ...TextStyles, {paddingBottom: 100}]}>Dobrodošao natrag</Text>

                <Surface style={styles.HomeSurface}>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5} onPress={() => navigation.navigate("QuizScreen")}>
                        <Text style={styles.ButtonText}>Kviz</Text>
                        <Text style={styles.ButtonSubText}>Izazovi svoje znanje i testiraj se!</Text>
                        <Image style={styles.TestImage} source={require("../../assets/images/test.png")}></Image>
                    </TouchableOpacity>
                </Surface>

                <Surface style={styles.HomeSurface}>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5} onPress={() => navigation.navigate("LeaderboardScreen")}>
                        <Text style={styles.ButtonText}>Ljestvica</Text>
                        <Text style={styles.ButtonSubText}>Svaka pobjeda vodi prema vrhu!</Text>
                        <Image style={styles.MatImage} source={require("../../assets/images/leaderboard.png")}></Image>
                    </TouchableOpacity>
                </Surface>

                <Surface style={styles.HomeSurface}>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5} onPress={() => navigation.navigate("ResourceScreen")}>
                        <Text style={styles.ButtonText}>Materijal</Text>
                        <Text style={styles.ButtonSubText}>Svi potrebni materijali za tvoj uspjeh!</Text>
                        <Image style={styles.MatImage} source={require("../../assets/images/gradCap-removebg-preview.png")}></Image>
                    </TouchableOpacity>
                </Surface>
                <Surface style={styles.HomeSurface}>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity={0.5} onPress={() => navigation.navigate("ResourceScreen")}>
                        <Text style={styles.ButtonText}>Favoriti</Text>
                        <Text style={styles.ButtonSubText}>Sve tvoje najdraže na jednome mjestu!</Text>
                        <Image style={styles.TestImage} source={require("../../assets/images/star.png")}></Image>
                    </TouchableOpacity>
                </Surface>
            </SafeAreaView>
        </Surface>
    )
};


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
        fontFamily: "Roboto-Thin"
    }
});
const Stack = createStackNavigator<RootStackParamList>();

export default function HomeScreen() {
    const colorScheme = useColorScheme()
    const bgcolor = colorScheme === "dark" ? MD3DarkTheme.colors.background : "fff"
    return (
        <Stack.Navigator screenOptions={{headerShown: false, headerStyle: {backgroundColor: bgcolor}}}>
            <Stack.Screen name={"Home"} component={HomeScreenUI}/>
            <Stack.Screen name={"QuizScreen"} component={QuizScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"LeaderboardScreen"} component={LeaderBoardScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ResourceScreen"} component={ResourceScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
