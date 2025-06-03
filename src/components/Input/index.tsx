import { View, Text, TextInput, TouchableOpacity, useWindowDimensions } from "react-native";
import styles from "./styles";
import { Eye, EyeClosed } from "phosphor-react-native";
import { useState } from "react";


interface InputProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    type?: string;
}

export function Input({ label, placeholder, value, onChangeText, type = "text" }: InputProps) {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[styles.container, { width: isSmallScreen ? '100%' : 400 }]}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer, {height: isSmallScreen ? 60 : 50}]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={type === "password" && !showPassword}
                />
            </View>
        </View>
    );
}