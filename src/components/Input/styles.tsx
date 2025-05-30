import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

export default StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 8,
        height: 80
    },

    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    inputContainer: {
        width: '100%',
        height: 60,
        padding: 8,
        backgroundColor: globalStyles.background2,
        justifyContent: 'center',
        borderRadius: 8,

        flexDirection: 'row',
        alignItems: 'center'
    },

    input: {
        flex: 1,
        color: 'black',
        height: '100%'
    }
});