import React, { useState } from 'react';
import { View, Text, TextInput,  Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const LoginScreen = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation();

  const handleLogin = async() => {
    // Lógica de inicio de sesión
    try {
      // Implementar la llamada al endpoint de login
      const response = await axios.post("http://localhost:3000/Login", {
        Correo: correo,
        Contrasena: contrasena
      });
      console.log("Respuesta del servidor:", response.data);
      // Navega a Home si el login es exitoso
      navigation.navigate("HomeScreen", response.data);
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };


  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contrasena"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={true}
        />
      </View>
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
        color="#9370DB" // Color del botón
        titleStyle={styles.buttonText} // Estilo del texto del botón
      />
      <Button
        title="Registrarse"
        onPress={handleRegister}
        color="#9370DB" // Color del botón
        titleStyle={styles.buttonText} // Estilo del texto del botón
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1a1a1a", // Fondo oscuro
    padding: 20,
  },
  title: {
    fontSize: 28, // Un poco más grande para mayor impacto
    fontWeight: "bold",
    color: "#9370DB", // Color morado
    alignSelf: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: "#f2f2f2", // Blanco suave para buen contraste
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#f2f2f2", // Un gris oscuro para el fondo del input
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#555555", // Gris más claro para el borde
    color: "black", // Color morado para el texto
  },
  button: {
    backgroundColor: "#9370DB", // Botón con color morado
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#f2f2f2", // Texto oscuro para contraste
    fontSize: 18,
    fontWeight: "500",
  },
  registerText: {
    color: "#f2f2f2", // Texto del registro en el mismo color morado
    textAlign: "center",
    fontSize: 16,
  },
  logo: {
    width: 100, // Ajusta el tamaño del logo según tus necesidades
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default LoginScreen;