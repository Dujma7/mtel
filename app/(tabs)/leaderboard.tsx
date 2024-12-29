import { FlatList, ScrollView, View, Text} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";
import { Card, PaperProvider, Surface} from 'react-native-paper';
import { Leaderboard } from 'flywheel-leaderboard';
import { useColorScheme } from 'react-native';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function LeaderBoardScreen() {
  let [fontsLoaded] = useFonts({"Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    "ClashDisplay-Variable": require("../../assets/fonts/ClashDisplay-Bold.otf")
  });

    const colorScheme = useColorScheme()
      const TextStyles = [colorScheme === "dark" ? styles.lightText : styles.darkText]

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const leaderboardData = [
    {id: '1', name: 'Zvonko Dujmovic', score: 120},
    {id: '2', name: 'Ivo Rodjak', score: 100},
    {id: '3', name: 'Mateo', score: 80},
    {id: '4', name: 'Marko Peder I.', score: 70},
    {id: '5', name: 'Miroslav', score: 0},
    {id: '6', name: 'EDP 445', score: 10},
    {id: '7', name: 'Ne znam ', score: 30},
    {id: '8', name: 'Hallo', score: 60},
  ];

  type ItemProps = {title: string, score: number, id: string};

const Item = ({title, score, id}: ItemProps) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>{id}</Text>
    <Text style={styles.cardText}>{title}</Text>
    <Text style={styles.cardText}>{score}</Text>
  </View>
);

return (
  <Surface style={[styles.container]}>
      <SafeAreaView>
        <Text style={styles.leaderboardH1}>Leaderboards</Text>
        <FlatList
          style = {styles.leaderboard}
          data={leaderboardData}
          renderItem={({item}) => <Item title={item.name} score={item.score} id={item.id} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
  </Surface>
  
)};