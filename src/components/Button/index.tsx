import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { useWindowDimensions } from "react-native";
interface buttonProps {
    children: any
}

export function Button({children} : buttonProps){
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;

    return (
        <TouchableOpacity style = {[styles.container, { width: isSmallScreen ? '100%' : 600}]}>
            {children}
        </TouchableOpacity>

    )


}