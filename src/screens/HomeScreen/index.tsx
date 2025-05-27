import { View, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { CardOption } from "../../components/CardOption";
import styles from "./styles"

export function HomeScreen() {
    return  (
        <View style={styles.container}>
            <Header
                name="Estabelecimentos"
            />
            <ScrollView style={styles.content}>
                <CardOption
                    nome="Estabelecimento 1"
                    meta="R$ 100,00"
                    fatura="R$ 200,00"
                />
                <CardOption
                    nome="Estabelecimento 1"
                    meta="R$ 100,00"
                    fatura="R$ 200,00"
                />
                <CardOption
                    nome="Estabelecimento 1"
                    meta="R$ 100,00"
                    fatura="R$ 200,00"
                />
            </ScrollView>
        </View>
    );
}