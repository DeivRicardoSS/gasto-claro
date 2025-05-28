import { View, ScrollView, Text } from "react-native";
import { Header } from "../../components/Header";
import { CardOption } from "../../components/CardOption";
import styles from "./styles"
import { Button } from "../../components/Button";
import { Plus } from "phosphor-react-native";

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
                    <Plus size={20} color="white" />
                    <Text style={{ color: "white" }}>Novo Estabelecimento</Text>
                </Button>
            </ScrollView>
        </View>
    );
}