import styles from "./styles";
import { SafeAreaView, Text, Image } from "react-native";
import { Button } from "../../components/Button";

export function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/splash-icon.png')} style={styles.img}/>
            <Text style={styles.text}>Bem Vindo</Text>
            <Button>
                <Text>Entrar</Text>
            </Button>
        </SafeAreaView>
    );
}