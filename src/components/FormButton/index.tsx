import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
interface buttonProps {
    children: string,
    variant: string,
    onPress?: () => void
}

export function FormButton({children, variant, onPress} : buttonProps){
    let variantStyle = variant === 'primary' ? styles.primary : styles.secondary;
    let textColor = variant === 'primary' ? 'white' : 'black';

    return (
        <TouchableOpacity style = {[styles.container, variantStyle]} onPress={onPress}>
            <Text style={{color: textColor}}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}