import react from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import { createStackNavigator } from '@react-navigation/stack';
import Drinks from './src/components/category/Drinks';
import Sweets from './src/components/category/Sweets';
import Snack from './src/components/category/snack';
import Coffee from './src/components/category/Coffee';
import Soup from './src/components/category/Soup';
import Others from './src/components/category/Others';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Sweets" component={Sweets} />
        <Stack.Screen name="Snack" component={Snack} />
        <Stack.Screen name="Coffee" component={Coffee} />
        <Stack.Screen name="Soup" component={Soup} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <MyStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
  },
});
