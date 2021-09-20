import { StyleSheet, Platform, StatusBar } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
    textGoBack:{
        fontFamily:theme.fonts.title700,
        fontSize:18
    },
    wrapperGoBack:{
        marginBottom:12
    },
    buttonGoBack:{
        flexDirection:"row", 
        alignItems:"center",
    },
    containerButtonModal:{
        width: "90%"
    },

    wrapperContentModal: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
        justifyContent: "center",
        alignItems: "center"
    },


    customImageCards: {
        width: 65,
        height: 65
    },

    wrapperCards: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8
    },
    wrapperGrid: {
        flex: 1,
        paddingTop: 25
    },
    imageAvatar: {
        width: "100%",
        height: "100%"
    },
    contentAvatar: {
        width: "87%",
        height: "87%",
        backgroundColor: theme.colors.backgroundLight,
        borderRadius: 25
    },
    customGradient: {
        borderRadius: 27,
        justifyContent: "center",
        alignItems: "center"
    },
    wrapperAvatar: {
        width: 52,
        height: 52,
        backgroundColor: "transparent",
        overflow: "hidden"
    },
    textName: {
        fontFamily: theme.fonts.title700,
        fontSize: 28
    },
    textWelcome: {
        fontFamily: theme.fonts.title500,
        fontSize: 22,
        lineHeight: 23
    },
    wrapperUser: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    wrapperAll: {
        flex: 1,
        marginHorizontal: 25
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: theme.colors.backgroundLight

    }
});

export default styles;