import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
    textBalance:{
        fontFamily:theme.fonts.title500,
        fontSize:18,
    },
    title:{
        fontFamily:theme.fonts.title700,
        fontSize:19,
        borderBottomWidth:1,
        borderBottomColor:theme.colors.primary,
        marginBottom:12
    },
    textBold:{
        fontFamily:theme.fonts.title700,
        fontSize:16
    },
    contentvalues:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    contentAvatarMe:{
        width: "90%",
        height: "90%",
        backgroundColor: theme.colors.backgroundLight,
        borderRadius:6
    },
    customGradientMe:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:6
    },
    wrapperAvatarMe:{
        width: 80,
        height: 80
    },
    textMe:{
        fontFamily:theme.fonts.title400,
        fontSize:16
    },
    textNameMe:{
        fontFamily:theme.fonts.title700,
        fontSize:22,
        borderBottomWidth:1,
        borderBottomColor:theme.colors.primary,
        marginBottom:6
    },
    containerMe:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    wrapperMe: {
        backgroundColor: theme.colors.backgroundLight,
        width: "90%",
        paddingHorizontal:12,
        paddingVertical:16,
        borderRadius:6
    },
    
    imageAvatar: {
        width: "100%",
        height: "100%"
    }
});

export default styles;