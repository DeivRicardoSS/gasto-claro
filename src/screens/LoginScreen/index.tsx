import styles from "./styles";
import { SafeAreaView, Text, Image } from "react-native";
import { FormButton } from "../../components/FormButton";
import { Input } from "../../components/Input";
import { useState } from "react";

export function LoginScreen({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/splash-icon.png')} style={styles.img}/>
            <Text style={styles.text}>Login</Text>
            <Input label="Email" placeholder="Digite seu email" value={email} onChangeText={setEmail}/>
            <Input label="Senha" placeholder="Digite sua senha" type="password" value={password} onChangeText={setPassword}/>
            <FormButton variant="primary" onPress={() => navigation.navigate('Home')}>
                Entrar
            </FormButton>
        </SafeAreaView>
    );
}