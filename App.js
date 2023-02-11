import react from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>

      <Main/>

      <Footer/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
  },
});
