import { StyleSheet } from "react-native";
import { Platform } from "react-native";
const padding = Platform.OS === 'android' ? 0 : 26



export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#F8F8F8",
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.26,
        shadowRadius: 4,
        elevation: 5,
    },
    dots: {
        height: "100%",
        width: 28,
        justifyContent: "center",
        alignItems: "center",
    },
    info: {
        flex: 1,
        paddingLeft: 8,
        paddingBottom: padding,
        paddingTop: padding
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
        fontWeight: '600',
        fontSize: 16,
        color: "#464646"
    },
    meta: {
        fontWeight: '400',
        fontSize: 11,
        color: "#464646"
    },
    fatura: {
        fontWeight: '400',
        fontSize: 11,
        color: "#464646"
    }
});