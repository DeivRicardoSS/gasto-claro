import { View, Text, StyleSheet } from "react-native";
import { Input } from "../../components/Input";
import { useState } from "react";

export function AboutYou({navigation}: any) {
    const [nome, setNome] = useState("");
    return (
        <View>
            <View>

            </View>

            <View>
                <Input
                    label="Nome"
                    value={nome}
                    placeholder="Digite seu nome"
                    onChangeText={setNome}
                />
            </View>
        </View>
    );
}