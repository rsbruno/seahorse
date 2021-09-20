import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
    contentTransfers: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 55,
        marginTop: 22
    },
    textTransfer: {
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        textAlign: "center",
        marginTop: 16
    },
    wrapperContent: {
        width: "90%",
        backgroundColor: theme.colors.backgroundLight,
        paddingHorizontal: 12,
        borderRadius: 6, 
        paddingTop:12
    }
});

export default styles;