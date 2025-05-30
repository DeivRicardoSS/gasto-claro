import { createStackNavigator } from "@react-navigation/stack";
import globalStyles from "../../globalStyles";

import { BottomTabs } from "./BottomTabs";
import { EstablishmentScreen } from "../screens/EstablishmentScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LoginScreen } from "../screens/LoginScreen";

const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Boas Vindas">
            <Stack.Screen name="Boas Vindas" component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={BottomTabs} options={{headerShown: false}}/>
            <Stack.Screen name="Estabelecimento" component={EstablishmentScreen} options={{headerStyle: {backgroundColor: globalStyles.background}}} />
        </Stack.Navigator>
    );
}