import {StyleSheet} from "react-native"
import { theme } from "../../global/theme"

const styles = StyleSheet.create({

    textBold:{
        fontFamily:theme.fonts.title700,
        fontSize:22,
        textAlign:"center"
    },
    textContentModal:{
        fontFamily:theme.fonts.title500,
        fontSize:22,
        textAlign:"center"
    },

    wrapperContentModal: {
        backgroundColor: theme.colors.backgroundLight,
        paddingVertical:26,
        borderRadius:4,
        width: "100%"
    },
})

export default styles;