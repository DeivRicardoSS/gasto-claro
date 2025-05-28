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
            <View style={styles.dots}>
                <DotsSixVertical size={16} color="#000" />
            </View>
            <View style={styles.info}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.meta}>{meta}</Text>
                <Text style={styles.fatura}>{fatura}</Text>
            </View>
            <View style={styles.edit}>
                <NotePencil size={16} weight="fill" color="white" />
            </View>
            <View style={styles.delete}>
                <Trash size={16} weight="fill" color="white" />
            </View>
        </View>
    );
}