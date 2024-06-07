import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import axios from "axios";

const Endpoint = "http://localhost:3000";

// Definimos el componente RegisterScreen.
const RegisterScreen = () => {
  // Estados para cada campo del formulario.
  const [fullName, setFullName] = useState(""); // Nombre completo del usuario.
  const [email, setEmail] = useState(""); // Correo electrónico del usuario.
  const [password, setPassword] = useState(""); // Contraseña elegida por el usuario.
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirmación de la contraseña.
  const [country, setCountry] = useState(""); // País del usuario.
  const [phoneNumber, setPhoneNumber] = useState(""); // Número de teléfono del usuario (opcional).
  const [birthday, setBirthday] = useState(""); // Fecha de nacimiento del usuario (opcional).
  const [gender, setGender] = useState(""); // Género del usuario (opcional).
  const [termsAndConditions, setTermsAndConditions] = useState(false); // Estado que indica si se aceptaron los términos y condiciones.
  const navigation = useNavigation();

  // Función para cambiar el estado de los términos y condiciones.
  const toggleTermsAndConditions = () => {
    setTermsAndConditions(!termsAndConditions);
  };

  // Función para manejar la lógica de registro al presionar el botón.
  const handleRegister = async () => {
    // Implementar la lógica de inicio de sesión
    const resp = await axios.post(`${Endpoint}/registro`, {
      FullName: fullName,
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword,
      Country: country,
      PhoneNumber: phoneNumber,
      Birthday: birthday,
      Gender: gender,
      activo: true
      //TermsAndConditions:termsAndConditions
    });
    console.log(resp.data);
    console.log("Registrando al usuario:", fullName, email);
  }; // Aquí agregarías la lógica para validar los campos y proceder con el registro.

  // La UI del componente, envuelta en ScrollView para garantizar que sea desplazable.
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Registrarse</Text>

        {/* Campo para el nombre completo */}
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="John Doe"
          placeholderTextColor="#aaa"
        />

        {/* Campo para el correo electrónico */}
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="john.doe@example.com"
          placeholderTextColor="#aaa"
        />

        {/* Campos para contraseña y confirmación de la misma */}
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="********"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          placeholder="********"
          placeholderTextColor="#aaa"
        />

        {/* Resto de campos para información adicional */}
        <Text style={styles.label}>Country:</Text>
        <TextInput
          style={styles.input}
          value={country}
          onChangeText={setCountry}
          placeholder="Your Country"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.label}>Phone Number (optional):</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="+1234567890"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.label}>Date of Birth (optional):</Text>
        <TextInput
          style={styles.input}
          value={birthday}
          onChangeText={setBirthday}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.label}>Gender (optional):</Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={setGender}
          placeholder="Male/Female/Other"
          placeholderTextColor="#aaa"
        />

        {/* Botón para aceptar términos y condiciones */}
        <TouchableOpacity onPress={toggleTermsAndConditions} style={styles.termsAndConditionsContainer}>
          <Text style={styles.termsText}>
            {termsAndConditions ? "✔ Accepted" : "✘ Not Accepted"} Accept Terms and Conditions
          </Text>
        </TouchableOpacity>

        {/* Botón de registro, desactivado si los términos y condiciones no se han aceptado */}
        <TouchableOpacity
          disabled={!termsAndConditions}
          onPress={handleRegister}
          style={[
            styles.registerButton,
            { backgroundColor: termsAndConditions ? "#6a0dad" : "#ccc" },
          ]}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={styles.loginText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos usados en el componente.
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Asegura que el contenido pueda crecer para llenar el espacio
    justifyContent: "center", // Centra el contenido
    padding: 20, // Espacio alrededor del contenido
    paddingBottom: 20, // Espacio al final del scroll
    backgroundColor: "#000", // Fondo negro
  },
  formContainer: {
    paddingHorizontal: 20, // Espacio horizontal para el formulario
  },
  title: {
    fontSize: 24, // Tamaño de la fuente del título
    color: "#fff", // Color del título
    textAlign: "center", // Centrar el título
    marginBottom: 20, // Margen inferior para el título
  },
  label: {
    marginTop: 15, // Espacio superior para cada etiqueta
    marginBottom: 5, // Espacio inferior para cada etiqueta
    fontWeight: "bold", // Texto en negrita para las etiquetas
    color: "#fff", // Color de las etiquetas
  },
  input: {
    height: 40, // Altura fija para los inputs
    borderColor: "#6a0dad", // Color del borde morado
    borderWidth: 1, // Ancho del borde
    borderRadius: 5, // Bordes redondeados
    marginBottom: 10, // Espacio inferior para cada input
    paddingHorizontal: 10, // Espacio interior horizontal
    color: "#fff", // Color del texto
    backgroundColor: "#333", // Fondo de los inputs
  },
  termsAndConditionsContainer: {
    marginTop: 20, // Espacio superior antes de los términos y condiciones
    flexDirection: "row", // Ordena los elementos en fila
    alignItems: "center", // Centra los elementos verticalmente
    justifyContent: "center", // Centra los elementos horizontalmente
  },
  termsText: {
    color: "#6a0dad", // Color del texto de términos
  },
  loginText: {
    color: "#6a0dad", // Color del texto del enlace de login
    textAlign: "center", // Centrar el texto
    marginTop: 20, // Margen superior para el texto de login
  },
  registerButton: {
    marginTop: 20, // Margen superior para el botón
    padding: 10, // Relleno del botón
    borderRadius: 5, // Bordes redondeados del botón
  },
  registerButtonText: {
    color: "#fff", // Color del texto del botón
    textAlign: "center", // Centrar el texto del botón
    fontWeight: "bold", // Texto en negrita
  },
});

export default RegisterScreen; // Exportación del componente para su uso en otras partes de la aplicación.
