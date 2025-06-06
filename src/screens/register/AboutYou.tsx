import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Input } from "../../components/Input";
import { useState } from "react";
import { IdentificationCard } from "phosphor-react-native";
import { FormButton } from "../../components/FormButton";

export function AboutYou({navigation}: any) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;

    return (
        <View style={styles.container}>
            <View style={[styles.header, { width: isSmallScreen ? '100%' : 400 }]}>
                <IdentificationCard size={32}/>
                <Text style={styles.title}>Queremos te conhecer melhor!</Text>
                <Text>Precisamos de suas informações básicas</Text>
            </View>

            <View style={[styles.inputs, { width: isSmallScreen ? '100%' : 400 }]}>
                <Input
                    label="Nome"
                    value={nome}
                    placeholder="Digite seu nome"
                    onChangeText={setNome}
                />
                <Input
                    label="Sobrenome"
                    value={nome}
                    placeholder="Digite seu sobrenome"
                    onChangeText={setNome}
                />
                <Input
                    label="Data de nascimento"
                    value={nome}
                    placeholder="Digite seu sobrenome"
                    onChangeText={setNome}
                />
            </View>
            <FormButton variant="primary">
                Prosseguir
            </FormButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "space-between",
        height: "100%",
        alignItems: "center"
    },

    header: {
        width: "100%"
    },

    title: {
        fontWeight: "bold",
        fontSize: 20
    },

    inputs: {
        gap: 16,
        width: '100%'
    }
});