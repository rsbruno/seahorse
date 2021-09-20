import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
    wrapperPrice:{
        marginRight:12,
        alignItems:"flex-end"
    },
    subTitleInvoice: {
        fontFamily: theme.fonts.title500,
        fontSize: 18
    },
    titleInvoice: {
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },
    namePlace: {
        flex: 1,
        marginLeft: 12
    },
    cardInvoice: {
        flexDirection: "row",
        paddingVertical:8,
        borderTopColor:theme.colors.primary,
        borderTopWidth:1,
        paddingTop:18
    },
    avatarInvoice: {
        width: 38,
        height: 38,
        backgroundColor: theme.colors.red,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: "center"
    },

    wrapperAvatarInvoice: {
        marginLeft: 8
    },
});

export default styles;