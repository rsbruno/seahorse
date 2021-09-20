import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
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