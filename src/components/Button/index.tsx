import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
interface buttonProps {
    children: any
}

export function Button({children} : buttonProps){

    return (
        <TouchableOpacity style = {styles.container}>
            {children}
        </TouchableOpacity>

    )


}