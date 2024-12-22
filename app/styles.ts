import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex", 
      textAlign: "center",
    },
    settingsH1: {
      textAlign: "center",
      fontSize: 50,
      paddingTop: 10,
      paddingBottom: 20, 
      fontFamily: "Roboto-Bold",
    },
    textH2: {
      textAlign: "center",
      fontSize: 25,
      padding: 20,
      paddingTop: 0,
      fontFamily: "Roboto-Thin"},
  
      lightMode: {
          backgroundColor: "#FAF0E6",
          color: "black"
      },
      darkMode: {
          backgroundColor: "#191919",
          color: "white"
      },
      lightText: {
          color: "#FAF0E6",
          borderColor: "white",
      },
      darkText: {
          color: "#181C14",
          borderColor: "black",
      },
      setting: {
          padding: 10,
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginRight: 25,
          marginLeft: 25,
      },
      imageUser: {
          height: 50,
          width: 50,    
      },
      profileTxt: {
          paddingTop: 10,
          paddingLeft: 0,
      },
      hr: {
          borderStyle: "solid",
          borderTopWidth: 1,
          borderColor: "black",
          width: "100%",
      }
  
  });