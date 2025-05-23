import { View } from "react-native";
import { Header } from "../../components/Header";
import styles from "./styles"

export function NotificationsScreen() {
    return  (
        <View style={styles.container}>
            <Header name="Notificações"/>
        </View>
    );
}