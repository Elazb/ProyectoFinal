import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la Gestión de Usuarios y Acciones!</Text>
      
      <Image
        source={require('../img/logo.png.jpg')} // Ruta de tu imagen
        style={styles.image}
      />
      
      <View style={styles.buttonsContainer}>
        <Button
          title="Países"
          onPress={() => navigation.navigate('Countries')}
          color="#9370DB"
          titleStyle={styles.buttonText}
        />
        {/* <Button
          title="Acciones"
          onPress={() => navigation.navigate('Actions')}
          color="#9370DB"
          titleStyle={styles.buttonText}
        /> */}
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Usuarios"
          onPress={() => navigation.navigate('Users')}
          color="#9370DB"
          titleStyle={styles.buttonText}
        />
        <Button
          title="Broker"
          onPress={() => navigation.navigate('Brokers')}
          color="#9370DB"
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1a1a1a', // Fondo oscuro
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f2f2f2', // Texto claro
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff', // Texto blanco
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    width: 200, // Ajusta el ancho según tus necesidades
    height: 200, // Ajusta la altura según tus necesidades
    resizeMode: 'contain', // Ajusta el modo de escalado
    marginBottom: 20, // Ajusta el margen inferior según tus necesidades
  },
});

export default HomeScreen;