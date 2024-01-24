import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuarios from './src/components/Usuarios'; //tercero se importa el componente en el padre que es app


export default function App() {
  return (
    <View style={styles.container}>
      <Usuarios/>
      <Text>Bienvenido a mi primera aplicación React Native!!!</Text>
  

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
