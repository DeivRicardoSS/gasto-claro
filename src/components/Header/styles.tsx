import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";


export default StyleSheet.create({
    container: {
        width: '100%',
        top: 0,
        padding: 18,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.26,
        shadowRadius: 4,
        elevation: 5,
    },

    text: {
        padding: 0,
        margin: 0,
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 20,
    }
});