import {StyleSheet} from "react-native"
import {theme} from "../../global/theme"

const styles = StyleSheet.create({
    buttonTextForgotModal: {
        color: theme.colors.textHightLight,
        textTransform: "uppercase",
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },
    buttonForgotModal: {
        backgroundColor: theme.colors.primary,
        width: "80%",
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    inputModal: {
        backgroundColor: "#fff",
        borderColor: theme.colors.primary,
        borderWidth: 1,
        height: 42,
        borderRadius:4,
        fontSize: 18,
        textAlign: "center"
    },
    wrapperInputModal: {
        width: "85%",
        marginTop: 15,
        marginBottom:15
    },
    subtextForgotModal:{
        fontFamily: theme.fonts.title500,
        fontSize: 18
    },
    textForgotModal: {
        fontFamily: theme.fonts.title700,
        fontSize: 22
    },
    contentInput: {
        width: "100%",
        backgroundColor: theme.colors.backgroundLight,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 22
    }
})

export default styles;