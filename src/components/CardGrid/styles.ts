import {StyleSheet} from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
    labelCard:{
        fontFamily:theme.fonts.title700,
        color: theme.colors.backgroundLight,
        fontSize:16,
        marginTop:8
    },
    customCardGradient:{
        justifyContent:"center",
        alignItems:"center"
    },
    wrapperCard:{
        width: "49%",
        height: 120,
        borderRadius:12,
        overflow: "hidden"
    },
});

export default styles;