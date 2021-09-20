import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
    textPix: {
        fontFamily: theme.fonts.title500,
        fontSize: 16,
        marginTop:12
    },
    contentPix: {
        justifyContent: 'center',
        alignItems: "center"
    },
    textLabel: {
        fontFamily: theme.fonts.title700,
        fontSize: 16
    },
    textBalance: {
        fontFamily: theme.fonts.title500,
        fontSize: 16
    },
    inline: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    subTitle: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        marginTop: 12, 
        borderBottomColor:theme.colors.primary,
        borderBottomWidth:1,
        marginBottom:12
    },
    wrapperCardsScroll: {
        flexDirection: "row"
    },
    containerModal: {
        width: "90%",
        backgroundColor: theme.colors.backgroundLight,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
    }
});

export default styles;