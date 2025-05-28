import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#F8F8F8",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.26)",
        borderRadius: 8,
        marginBottom: 10,
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
        padding: 16,
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
    },
    nome: {
        fontWeight: 600,
        fontSize: 16,
        color: "#464646"
    },
    meta: {
        fontWeight: 400,
        fontSize: 11,
        color: "#464646"
    },
    fatura: {
        fontWeight: 400,
        fontSize: 11,
        color: "#464646"
    }
});