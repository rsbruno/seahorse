import { StyleSheet } from "react-native"
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
    logo:{
        height: 60,
        resizeMode:"contain",
        marginBottom:25,
        marginTop:"50%"
    },
    descriptionCard:{
        color: theme.colors.textHightLight,
        textAlign:"center",
        fontFamily:theme.fonts.title700,
        fontSize:16,
        marginTop:12
    },
    wrapperCard:{
        width: 85,
        height: 85,
        marginHorizontal:12,
        borderLeftColor:theme.colors.textHightLight,
        borderRightColor:theme.colors.textHightLight,
        borderLeftWidth:1,
        borderRightWidth:1,
        justifyContent:"center",
        alignItems:"center"

    },
    footerCards:{
        position: "absolute",
        bottom: "12%",
        left: 0,
        width: "100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    buttonCloseModal:{
        width: 32,
        height: 32,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
        marginRight:8,
        marginTop:8
    },
    wrapperCloseModal:{
        top:0,
        left: 0,
        backgroundColor:theme.colors.backgroundLight,
        width: "100%",
        justifyContent:"flex-end",
        alignItems:"flex-end"    
    },

    wrapperForgotModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
        backgroundColor: theme.colors.overlay,
    },

    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingHorizontal: 32
    },
    forgotPassword: {
        color: theme.colors.textHightLight,
        width: "100%",
        textAlign: "left"
    },
    wrapperButtonForgot: {
        width: "100%"
    },
    buttonSignIn: {
        width: "100%",
        backgroundColor: theme.colors.backgroundLight,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginTop: 15,
        borderRadius: 4
    },
    buttonInputText: {
        fontFamily: theme.fonts.title700,
        textTransform: "uppercase",
        fontSize: 18,

    }
})

export default styles;