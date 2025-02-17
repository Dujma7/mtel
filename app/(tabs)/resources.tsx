import { Image, StyleSheet, Platform, View, Linking ,Text, TouchableOpacity} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Surface, Button} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function ResourceScreen() {
  let [fontsLoaded] = useFonts({"Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Surface style={{height: "100%"}}>
      <SafeAreaView>
          <Text style={styles.profileText}>Materijali</Text>
          <Text style={styles.profileText}>Ovdje imate određenih videa za učenje i olakšavanje vozačkog ispita</Text>
        <ScrollView>
          <Surface style={styles.materijalSurface}>
            <Text style={styles.materijalText1}>Kako se parkirati</Text>
            <Button onPress={() => Linking.openURL("https://www.youtube.com/watch?v=tO-dS4JyF6Q")}>Pogledaj materijal</Button>
          </Surface>
          <Surface style={styles.materijalSurface}>
            <Text style={styles.materijalText1}>Pitanja za provjeru vozila</Text>
            <Button onPress={() => Linking.openURL("https://www.youtube.com/watch?v=0VYtm8JV3KE")}>Pogledaj materijal</Button>
          </Surface>
          <Surface style={styles.materijalSurface}>
            <Text style={styles.materijalText1}>Kako se vozi auto</Text>
            <Button onPress={() => Linking.openURL("https://www.youtube.com/watch?v=25rtRltjUPA")}>Pogledaj materijal</Button>
          </Surface>
          <Surface style={styles.materijalSurface}>
            <Text style={styles.materijalText1}>Svi prometni znakovi</Text>
            <Button onPress={() => Linking.openURL("https://www.instruktor-voznje.com.hr/prometni_znakovi/")}>Pogledaj materijal</Button>
          </Surface>
          <Surface style={styles.materijalSurface}>
            <Text style={styles.materijalText1}>Pravilo desne strane</Text>
            <Button onPress={() => Linking.openURL("https://www.youtube.com/watch?v=wdWrokH1MMY")}>Pogledaj materijal</Button>
          </Surface>
        </ScrollView>
        
      </SafeAreaView>
    </Surface>
)};