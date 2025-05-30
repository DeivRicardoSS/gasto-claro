import { View, Text, TextInput, TouchableOpacity } from "react-native";
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
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={type === "password" && !showPassword}
                />
                {type === "password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                            <Eye size={24}  color="black" />
                        ) : (
                            <EyeClosed size={24}  color="black" />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}