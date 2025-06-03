import { View, Text, TouchableOpacity } from "react-native";
import { DotsSixVertical, Trash, NotePencil } from "phosphor-react-native";
import styles from "./styles";
import { useWindowDimensions } from "react-native";



interface CardOptionProps {
    nome: string;
    meta: number;
    fatura: number;
    onPress?: () => void
}
export function CardOption({ nome, meta, fatura, onPress }: CardOptionProps) {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 600;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { width: isSmallScreen ? '100%' : 600}]}>
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
        </TouchableOpacity>
    );
}