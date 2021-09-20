import { StyleSheet } from "react-native"
import { theme } from "../../../global/theme";

const styles = StyleSheet.create({
    wrapperInput:{
        marginVertical:4,
        width: "100%"
    },
    input: {
        backgroundColor: theme.colors.backgroundLight,
        width: "100%",
        paddingHorizontal:12,
        paddingVertical:4,
        borderRadius:4,
        fontFamily: theme.fonts.title700,
        fontSize:16
    }
})

export default styles;