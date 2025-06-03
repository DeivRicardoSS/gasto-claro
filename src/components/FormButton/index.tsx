import { TouchableOpacity, Text, useWindowDimensions } from "react-native";
import styles from "./styles";
interface buttonProps {
    children: string,
    variant: string,
    onPress?: () => void
}

export function FormButton({children, variant, onPress} : buttonProps){
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;

    let variantStyle = variant === 'primary' ? styles.primary : styles.secondary;
    let textColor = variant === 'primary' ? 'white' : 'black';

    return (
        <TouchableOpacity style = {[styles.container, variantStyle, { width: isSmallScreen ? '100%' : 400, padding: isSmallScreen ? 24 : 14 }]} onPress={onPress}>
            <Text style={{color: textColor}}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}