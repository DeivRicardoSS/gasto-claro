import { View, Text, Image, SafeAreaView } from "react-native";
import { GearSix, Globe, PersonArmsSpread, File, ChalkboardTeacher, SignOut } from "phosphor-react-native";
import styles from "./styles"

export function ProfileScreen() {
    return  (
        <SafeAreaView style={styles.container}>
            <View style={styles.user}>
                <Image style={styles.userImg} source={require('../../../assets/placeholderProfile.png')} />
                <View>
                    <Text style={styles.userName}>Nome</Text>
                    <Text style={styles.userEmail}>Email</Text>
                </View>
            </View>
            <View style={styles.options}>
                <View style={styles.option}>
                    <GearSix size={32} weight="fill" color="black" />
                    <Text>Configurações</Text>
                </View>
                <View style={styles.option}>
                    <Globe size={32} weight="fill" color="black" />
                    <Text>Idioma</Text>
                </View>
                <View style={styles.option}>
                    <PersonArmsSpread size={32} weight="fill" color="black" />
                    <Text>Privacidade</Text>
                </View>
                <View style={styles.option}>
                    <File size={32} weight="fill" color="black" />
                    <Text>Termos de uso</Text>
                </View>
                <View style={styles.option}>
                    <ChalkboardTeacher size={32} weight="fill" color="black" />
                    <Text>Ajuda</Text>
                </View>
                <View style={styles.option}>
                    <SignOut size={32} weight="fill" color="black" />
                    <Text>Sair</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}