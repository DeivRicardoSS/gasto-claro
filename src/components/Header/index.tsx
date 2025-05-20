import { View, Text } from "react-native";
import styles from "./styles"

interface headerProps {
    name: string
}

export function Header({ name } : headerProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {name}
            </Text>
        </View>
    );
}