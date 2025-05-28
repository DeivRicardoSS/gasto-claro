import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 20,
        top: 0,
        padding: 32,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.background,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.26)"
    },

    text: {
        padding: 0,
        margin: 0,
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 20,
    }
});