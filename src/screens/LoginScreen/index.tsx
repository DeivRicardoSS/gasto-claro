import styles from "./styles";
import { SafeAreaView, Text, Image, View } from "react-native";
import { FormButton } from "../../components/FormButton";
import { Input } from "../../components/Input";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import credentials from "../../api/credentials";

export function LoginScreen({navigation}: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch(`https://parseapi.back4app.com/login?username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
                method: 'GET',
                headers: {
                    'X-Parse-Application-Id': credentials.APP_ID,
                    'X-Parse-REST-API-Key': credentials.API_KEY,
                    'content-type': 'application/json'
                }
            })


            const data = await response.json();
            console.log("Usuário autenticado", data);

            await AsyncStorage.setItem('sessionToken', data.sessionToken);
            await AsyncStorage.setItem("userId", data.objectId);
            await AsyncStorage.setItem("nome", data.nome);
            await AsyncStorage.setItem("sobrenome", data.sobrenome);

             navigation.navigate('Home');
            
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.gambiarra}>
                <Image source={require('../../../assets/splash-icon.png')} style={styles.img}/>
                <Text style={styles.text}>Login</Text>
                <Input label="Email" placeholder="Digite seu email" value={email} onChangeText={setEmail}/>
                <Input label="Senha" placeholder="Digite sua senha" type="password" value={password} onChangeText={setPassword}/>
                <FormButton variant="primary" onPress={handleLogin}>
                    Entrar
                </FormButton>
            </View>
        </SafeAreaView>
    );
}