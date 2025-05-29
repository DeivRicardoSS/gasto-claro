import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import globalStyles from './globalStyles';


export default function App() {
  
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={globalStyles.background}
      />
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.background,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'RobotoCondensed-Medium'
  },
});