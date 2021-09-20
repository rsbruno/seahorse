import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
    containerCards: {
        marginTop: 12
    },
    divisor: {
        width: "100%",
        height: 2,
        backgroundColor: theme.colors.primary,
        marginVertical: 8
    },
    title:{
        fontFamily:theme.fonts.title700,
        fontSize:22
    },
    contentModal: {
        width: "90%",
        backgroundColor: theme.colors.backgroundLight,
        borderRadius: 6,
        paddingHorizontal: 22,
        paddingVertical: 12
    },

});

export default styles;