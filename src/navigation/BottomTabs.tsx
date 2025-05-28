import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { NotificationsScreen } from "../screens/NotificationsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { House, Bell, User } from "phosphor-react-native";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ color, size }) => {
                    if (route.name === "Home") {
                        return <House size={32} color={color} />
                    } else if (route.name === "Notificações") {
                        return <Bell size={32} color={color} />
                    } else if (route.name === "Perfil") {
                        return <User size={32} color={color} />
                    }
                },
                tabBarStyle: {
                    height: 80,
                    paddingTop: 10
                },

            })}
        >
            <Tab.Screen name="Notificações" component={NotificationsScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
    );
}