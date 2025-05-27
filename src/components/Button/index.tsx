import { View, Text } from "react-native";
import styles from "./styles";
interface buttonProps {
    children: string
}

export function Button({children} : buttonProps){

    return (
        <View style = {styles.container}>
            <Text>
                {children}
            </Text>
        </View>

    )


}