import {StyleSheet} from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

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
        fontFamily: "Roboto-Thin",
        paddingBottom: 200
    },

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
        padding: 20,
    },
    QuizImage: {
        textAlign: "center",
        height: 160,
        width: 160,
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 15,
        marginBottom: 10,
        resizeMode: "contain"
    },
    goBackButton: {
        height: 40,
        justifyContent: "center",
        width: "40%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    ButtonStyle: {
        margin: 20
    },
    quizNextButton:{
        height: 40,
        justifyContent: "center",
        width: "40%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    leaderboardH1: {
        fontSize: 50,
        fontFamily: "Clash Display",
        fontWeight: 800,
        textAlign: "center",
        color: "#EFF3EA",
    },
    questionH1: {
        fontSize: 30,
        fontFamily: "Clash Display",
        fontWeight: 800,
        textAlign: "center",
        color: "#EFF3EA",
    },
    ptext: {
        marginTop:20,
        marginBottom:70,
        fontFamily: "Clash Display",
        fontWeight: 800,
        textAlign: "center",
        color: "#EFF3EA",
    },
    quizButtonText:{
        marginInline:20,
        fontFamily: "Clash Display",
        fontWeight: 800,
        textAlign: "center",
        color: "#EFF3EA",
    },
    errortext: {
        margin:10,
        fontFamily: "Clash Display",
        fontWeight: 800,
        textAlign: "center",
        color: "#ff3939",
    },
    card: {
        margin: 5,
        height: 30,
        borderRadius: "2%",
        justifyContent: "space-between",
        backgroundColor: "#3b3845",
        flexDirection: "row",
        alignItems: "center",
        padding: 5

    },
    cardText: {
        textAlign: "center",
        color: "white",
    },
    leaderboard: {
        textAlign: "center",
        padding: 20,
        paddingTop: 10,
        borderColor: "#242329",
        height: "100%"
    },
    HomeSurface: {
        height: 100,
        backgroundColor: "#3b3845",
        borderRadius: "5%",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        margin: 10,
        justifyContent: "space-around",
        shadowColor: "transparent",
    },
    ButtonText: {
        color: "#c6b2f1",
        fontSize: 25,
        fontFamily: "San Francisco",
        fontWeight: 500
    },
    MatImage: {
        marginLeft: "70%",
        height: 100,
        width: 100,
        position: "relative",
        top: -70
    },
    ButtonSubText: {
        color: "#c6b2f1",
        fontSize: 15,
        fontFamily: "San Francisco",
        fontWeight: 500,
        marginTop: 10
    },
    buttonStyle: {
        height: 100,
        backgroundColor: "#3b3845",
        borderRadius: "5%",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        margin: 10,
        justifyContent: "space-around",
        shadowColor: "transparent",
    },
    quizButtonStyle: {
        minHeight: 65,
        padding:10,
        backgroundColor: "#3b3845",
        borderRadius: "5%",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        margin: 10,
        justifyContent: "space-around",
        shadowColor: "transparent",
    },
    TestImage: {
        marginLeft: "70%",
        height: 90,
        width: 90,
        position: "relative",
        top: -67,
        left: 10
    },
    profileText: {
        margin: 0,
        color: "#c6b2f1",
        fontSize: 25,
        fontWeight: 500,
        fontFamily: "Roboto",
        textAlign: "center"
    },
    profileButtonSubmit: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 350
    },
    profileButtonChange: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        padding: 10,
        borderRadius: 5,
    },
    timerText: {
        fontSize: 16,
        marginTop:20,
        fontWeight: 'bold',
    },
    QuizScreen: {
        flex: 1,
    },
    materijalSurface: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "5%",
        shadowOpacity: 0,
        backgroundColor: "#393642",
        margin: 15
      },
      materijalText: {
        color: "#c6b2f1",
        fontSize: 20,
        fontWeight: 300,
        fontFamily: "Roboto",
        textAlign: "center"
      },
      materijalText1: {
        margin: 10,
        color: "#c6b2f1",
        fontSize: 25,
        fontWeight: 400,
        fontFamily: "Roboto",
        textAlign: "center"
      },
      leaderboardHeader: {
        fontSize: 18,
        fontFamily: "Clash Display",
        fontWeight: 800,
        color: "#EFF3EA",
      },
      leaderboardHeaderSurface: {
        borderColor: "#242329",
        shadowOpacity: 0,
        marginLeft: "auto",
        marginRight: "auto"
    },
    QuizSelectTextTop: {
        margin: 10,
        fontSize: 25,
        fontWeight: 400,
        fontFamily: "Clash Display",
        textAlign: "center",
        color: "white",
    },
    SelectSurface: {
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "5%",
        shadowOpacity: 0,
        backgroundColor: "#393642",
        margin: 20,
        height: 150,
        width: 300,
        justifyContent: "center",
      },
      SelectText: {
        margin: 10,
        color: "#c6b2f1",
        fontSize: 24,
        fontWeight: 400,
        fontFamily: "Roboto",
        textAlign: "center"
      },
      SelectSurfaceDisabled: {
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "5%",
        shadowOpacity: 0,
        backgroundColor: "#2e2b36",
        margin: 20,
        height: 150,
        width: 300,
        justifyContent: "center",
      },
      SelectSubText: {
        margin: 1,
        color: "#c6b2f1",
        fontSize: 16,
        fontWeight: 200,
        fontFamily: "Roboto",
        textAlign: "center"
      },
});
