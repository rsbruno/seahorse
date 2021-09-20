import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
    normal: {
        fontFamily: theme.fonts.title400,
        fontSize: 16
    },
    bold: {
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },
    titleName: {
        fontFamily: theme.fonts.title500,
        fontSize: 18
    },

    wrapperPayment: {
        marginLeft: 22,
        paddingTop: 12
    },

    statusPayment: {
        fontFamily: theme.fonts.title700,
        fontSize: 22,
        marginLeft: 12
    },
    topPayments: {
        flexDirection: "row",
        alignItems: "center"
    },
    wrapperCifrao: {
        width: 35,
        height: 35,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17
    },
    containerPayments: {
        marginVertical: 12,
        marginHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: theme.colors.primary,
        paddingTop:8
    },
});

export default styles;