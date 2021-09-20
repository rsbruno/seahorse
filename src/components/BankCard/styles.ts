import {StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
    propData: {
        fontFamily: theme.fonts.title500,
        fontSize: 16
    },
    propName: {
        fontFamily: theme.fonts.title700,
        fontSize: 16
    },
    contentInfoCard: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default styles;