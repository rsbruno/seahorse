import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
    totalValue:{
        fontFamily:theme.fonts.title500,
        fontSize:18
    },
    totalText:{
        fontFamily:theme.fonts.title700,
        fontSize:18
    },
    wrapperTotal:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:12,
        marginTop:18,
        borderTopWidth:1,
        borderTopColor:theme.colors.primary,
        paddingVertical:8
    },
    titleModal: {
        fontFamily: theme.fonts.title700,
        fontSize: 22, 
        marginHorizontal:12,
         marginTop:9
    },
    wrapperAllInvoices: {
        marginHorizontal: 15,
        marginTop: 22
    },

    wrapperModal: {
        width: "90%",
        backgroundColor: theme.colors.backgroundLight,
        borderRadius:6
    },
});

export default styles;