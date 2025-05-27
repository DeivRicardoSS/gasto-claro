import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#F8F8F8",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.26)",
        borderRadius: 8,
        marginBottom: 8,
        overflow: 'hidden'
    },
    dots: {
        height: "100%",
        width: 28,
        justifyContent: "center",
        alignItems: "center",
    },
    info: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    edit: {
        height: "100%",
        width: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#45496C"
    },
    delete: {
        height: "100%",
        width: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF3B30",
    }
});