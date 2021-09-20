import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({


    titleModal: {
        fontFamily: theme.fonts.title700,
        fontSize: 22,
        marginTop: 12,
        marginLeft: 12
    },
    wrapperTotal: {
        flexDirection: "row"
    },
    wrapperModal: {
        width: "90%",
        backgroundColor: theme.colors.backgroundLight,
        borderRadius: 6
    },
});

export default styles;