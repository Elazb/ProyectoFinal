import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/usuario');
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userInfo}>ID: {item.id}</Text>
      <Text style={styles.userInfo}>Acciones ID: {item.actions_id}</Text>
      <Text style={styles.userInfo}>Cantidad Acciones: {item.cantidad_acciones}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Cargando usuarios...</Text>
      ) : error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  loadingText: {
    fontSize: 18,
    color: '#f2f2f2',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  userContainer: {
    backgroundColor: '#9370DB',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f2f2f2',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
    color: '#f2f2f2',
    marginBottom: 3,
  },
  backButton: {
    backgroundColor: '#9370DB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#f2f2f2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserScreen;
