import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ActionScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/actions')
      .then(response => response.json())
      .then(data => setActions(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={actions}
        renderItem={({ item }) => (
          <View style={styles.actionItem}>
            <Text style={styles.actionName}>{item.name}</Text>
            <Text style={styles.actionValue}>{item.price}</Text>
            <Text style={styles.actionValue}>{item.createdAt}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Regresar al Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a', // Fondo negro
  },
  actionItem: {
    backgroundColor: '#9370DB', // Fondo morado
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  actionName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f2f2f2', // Texto claro
    marginBottom: 5,
  },
  actionValue: {
    fontSize: 16,
    color: '#f2f2f2', // Texto claro
    marginBottom: 3,
  },
  backButton: {
    backgroundColor: '#9370DB', // Fondo morado
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#f2f2f2', // Texto claro
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ActionScreen;
