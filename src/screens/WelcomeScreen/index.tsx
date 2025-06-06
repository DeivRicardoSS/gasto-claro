import styles from "./styles";
import { SafeAreaView, Text, Image, View } from "react-native";
import { FormButton } from "../../components/FormButton";

export function WelcomeScreen({navigation}: any) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.gambiarra}>
                <Image source={require('../../../assets/splash-icon.png')} style={styles.img}/>
                <Text style={styles.text}>Bem Vindo</Text>
                <FormButton variant="secondary" onPress={() => navigation.navigate('Login')}>
                    Entrar
                </FormButton>
                <FormButton variant="primary" onPress={() => navigation.navigate('Dados Pessoais')}>
                    Cadastrar-se
                </FormButton>
            </View>
            
        </SafeAreaView>
    );
}