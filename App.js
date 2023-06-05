import react from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import Drinks from './src/components/category/Drinks';
import Sweets from './src/components/category/Sweets';
import Snack from './src/components/category/Snack';
import Coffee from './src/components/category/Coffee';
import Soup from './src/components/category/Soup';
import Others from './src/components/category/Others';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         initialRouteName="Home"
         screenOptions={{
           headerMode: 'screen',
           headerTintColor: 'white',
           headerStyle: { backgroundColor: 'green' },}}
      >
        <Stack.Screen  name="Main" component={Main} 
        options={{
          title: false,
        }}
        />
        <Stack.Screen name="Drinks" component={Drinks} 
        options={{
          title: 'Bebidas',
        }}
        />
        <Stack.Screen name="Sweets" component={Sweets} options={{
          title: 'Doces',
        }}
        />
        <Stack.Screen name="Snack" component={Snack} options={{
          title: 'Salgados',
        }}
        />
        <Stack.Screen name="Coffee" component={Coffee} options={{
          title: 'Café',
        }}
        />
        <Stack.Screen name="Soup" component={Soup} options={{
          title: 'Sopas',
        }}
        />
        <Stack.Screen name="Others" component={Others} options={{
          title: 'outros',
        }}
        />
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

});
