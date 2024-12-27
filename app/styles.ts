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
      },
      input: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "5%",
        marginTop: 10,
      },
      btnSubmit: {
        width: "40%",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
      },
      LogInH1: {
        textAlign: "center",
        fontSize: 50,
        marginTop: 200,
        paddingBottom: 20, 
        fontFamily: "Roboto-Bold",
      },
      register: {
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Roboto-Thin",
        paddingTop: 20,
      },
      containerLogIn: {
            flex: 1,
            display: "flex", 
            textAlign: "center",
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "center",
          },
      QuizSurface: {
        display: "flex",
        flex: 1,
        textAlign: "center",
        padding: 10,
        resizeMode: "center"
          },
      QuizAnswers: {
          marginBottom: 15,
          height: 40,
          justifyContent: "center",
        },
      QuizQuestion: {
        textAlign: "center",
        fontSize: 35,
        color: "#EFF3EA",
        padding: 20,
      },
      QuizImage: {
        textAlign: "center",
        height: 200,
        width: 200,
        justifyContent: "center",
        padding: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 40,
        borderRadius: "15%"
      },
      goBackButton: {
        height: 40,
        justifyContent: "center",
        width: "40%",
        marginLeft: "auto",
        marginRight: "auto"
      },
  });