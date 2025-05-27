import { View, Text } from "react-native";
import { DotsSixVertical, Trash, NotePencil } from "phosphor-react-native";
import styles from "./styles";

interface CardOptionProps {
    nome: string;
    meta: string;
    fatura: string;
}
export function CardOption({ nome, meta, fatura }: CardOptionProps) {
    return (
        <View style={styles.container}>
            <View>
                <DotsSixVertical size={32} color="#000" />
            </View>
            <View>
                <Text>{nome}</Text>
                <Text>{meta}</Text>
                <Text>{fatura}</Text>
            </View>
            <View>
                <NotePencil size={32} color="#000" />
            </View>
            <View>
                <Trash size={32} color="#000" />
            </View>
        </View>
    );
}