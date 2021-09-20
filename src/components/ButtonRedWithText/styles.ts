import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
    textButton:{
        fontFamily:theme.fonts.title700,
        color: theme.colors.textHightLight,
        fontSize:18
    },
    buttonRed: {
        width: "100%",
        backgroundColor: theme.colors.red,
        paddingVertical:12,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:6,
        marginTop:12
    }
});

export default styles;