import { View, ScrollView, Text, SafeAreaView } from "react-native";
import { Header } from "../../components/Header";
import { CardOption } from "../../components/CardOption";
import styles from "./styles"
import { Button } from "../../components/Button";
import { Plus } from "phosphor-react-native";
import credentials from "../../api/credentials";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

type Estab = {
    nome: string;
    meta_consumo: number;
    fatura: number;
    objectId: string;
}

export function HomeScreen({ navigation }: any) {
    const [estabelecimentos , setEstabelecimentos] = useState<Estab[]>([]);

    useEffect(() => {
        const requisicao = async () => {
            const idProprietario = await AsyncStorage.getItem('userId');
            const where = encodeURIComponent(JSON.stringify({
                id_usuario: {
                    __type: "Pointer",
                    className: "_User",
                    objectId: idProprietario
                }
            }))

            const resultado = await fetch(`https://parseapi.back4app.com/classes/Estabelecimentos?where=${where}`, {
                method: 'GET',
                headers: {
                    "X-Parse-Application-Id": credentials.APP_ID,
                    "X-Parse-REST-API-Key": credentials.API_KEY,
                    'content-type': 'application/json'
                }
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                return data.results;
            }).catch(error => {
                console.error("Error na requisição: ", error);
                return [];
            });

            setEstabelecimentos(resultado);
        }

        requisicao();
    }, [])

    const handleButton = async (id_imovel: string) => {
        await AsyncStorage.setItem('id_imovel', id_imovel);
        navigation.navigate('Estabelecimento');
    }




    return (
        <SafeAreaView style={styles.container}>
            <Header
                name="Estabelecimentos"
            />
            <ScrollView style={styles.content}>
                <View style={styles.cards}>
                    {
                        estabelecimentos.map((estab) => (
                            <CardOption
                                nome = {estab.nome}
                                meta = {estab.meta_consumo}
                                fatura = {estab.fatura}
                                onPress={() => {
                                    handleButton(estab.objectId)
                                }}
                            />
                        ))
                    }
                </View>

                <View style={styles.button}>
                    <Button>
                        <Plus size={20} color="white" />
                        <Text style={{ color: "white" }}>Novo Estabelecimento</Text>
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}