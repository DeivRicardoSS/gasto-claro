import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";


export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 24,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.26,
        shadowRadius: 4,
        elevation: 5,
    },
    primary: {
        backgroundColor: '#45556C',
    },
    secondary: {
        backgroundColor: globalStyles.background,
        borderWidth: 1,
        borderBlockEndColor: '#45556C'
    },

})