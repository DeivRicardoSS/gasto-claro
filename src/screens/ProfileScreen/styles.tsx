import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 16,
        gap: 5
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        padding: 16,
        borderBottomWidth: 1
    },
    userImg: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    userEmail: {
        fontSize: 16
    },
    options: {

    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        padding: 16
    }
});