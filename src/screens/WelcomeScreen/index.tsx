import styles from "./styles";
import { SafeAreaView, Text, Image } from "react-native";
import { FormButton } from "../../components/FormButton";

export function WelcomeScreen({navigation}: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/splash-icon.png')} style={styles.img}/>
            <Text style={styles.text}>Bem Vindo</Text>
            <FormButton variant="secondary" onPress={() => navigation.navigate('Login')}>
                Entrar
            </FormButton>
            <FormButton variant="primary" onPress={() => navigation.navigate('Register')}>
                Cadastrar-se
            </FormButton>
        </SafeAreaView>
    );
}