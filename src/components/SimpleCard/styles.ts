import { StyleSheet } from "react-native"
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
    contentCard:{
        justifyContent:"center",
        alignItems:"center"
    },
    descriptionCard:{
        color: theme.colors.textHightLight,
        textAlign:"center",
        fontFamily:theme.fonts.title700,
        fontSize:16,
        marginTop:12
    },
    wrapperCard:{
        width: 115,
        height: 85,
        marginHorizontal:12,
        borderLeftColor:theme.colors.textHightLight,
        borderRightColor:theme.colors.textHightLight,
        borderLeftWidth:1,
        borderRightWidth:1,
        justifyContent:"center",
        alignItems:"center"

    }
})

export default styles;