import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 0,
        gap: 5,
        height: '100%'
    },
    content: {
        flex: 1,
        padding: 16,
        gap: 5
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        minHeight: 400
    },
    button: {
        alignItems: 'center'
    }
});