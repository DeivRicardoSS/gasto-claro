import { View, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { CardOption } from "../../components/CardOption";
import styles from "./styles"
import { Button } from "../../components/Button";

export function HomeScreen() {
    return  (
        <View style={styles.container}>
            <Header
                name="Estabelecimentos"
            />
            <ScrollView style={styles.content}>
                <CardOption
                    nome="Estabelecimento 2"
                    meta="R$ 100,00"
                    fatura="R$ 200,00"
                />
                <CardOption
                    nome="Estabelecimento 3"
                    meta="R$ 100,00"
                    fatura="R$ 200,00"
                />
                <CardOption
                    nome="Estabelecimento 4"
                    meta="R$ 100,00"
                    fatura="R$ 200,00"
                />

                <Button>
                    Botão
                </Button>
            </ScrollView>
        </View>
    );
}