import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const CountriesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [countries, setCountries] = useState('Colombia');
  const [actionsByCountries, setActionsByCountries] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/acciones');
        setActionsByCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'INSERT_LOGO_URL_HERE' }}
          style={styles.logo}
        />
        <Text style={styles.userName}>{route.params?.userName || 'Usuario'}</Text>
      </View>
      <ScrollView>
        <View style={styles.countriesSelector}>
          {Object.keys(actionsByCountries).map((key) => (
            <TouchableOpacity key={key} onPress={() => setCountries(key)} style={styles.countriesButton}>
              <Text style={styles.name}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={actionsByCountries[countries]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.actionItem}>
              <Text style={styles.actionName}>{item.accion}</Text>
              <Text style={styles.actionValue}>${item.value}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#000',  // Fondo negro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  userName: {
    fontSize: 18,
    color: '#fff',  // Letras blancas
  },
  countriesSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  countriesButton: {
    padding: 10,
    backgroundColor: '#6a0dad',  // Morado
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    color: '#fff',  // Letras blancas
  },
  actionItem: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#6a0dad',  // Morado
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionName: {
    fontSize: 16,
    color: '#fff',  // Letras blancas
  },
  actionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',  // Letras blancas
  },
});

export default CountriesScreen;
