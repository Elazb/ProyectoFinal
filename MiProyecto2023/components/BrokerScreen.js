import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BrokerScreen = () => {
  const brokers = [
    {
      id: '1',
      name: 'Broker 1',
      country: 'Colombia',
      actions: ['AAPL', 'GOOGL'],
    },
    {
      id: '2',
      name: 'Broker 2',
      country: 'Estados Unidos',
      actions: ['AMZN', 'MSFT'],
    },
    {
      id: '3',
      name: 'Broker 3',
      country: 'España',
      actions: ['BBVA', 'TEF'],
    },
    {
      id: '4',
      name: 'Broker 4',
      country: 'Japón',
      actions: ['SNE', 'TM'],
    },
    // Agrega más brokers aquí según el formato establecido
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={brokers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.brokerContainer}>
            <Text style={styles.brokerName}>{item.name}</Text>
            <Text style={styles.brokerInfo}>País: {item.country}</Text>
            <Text style={styles.brokerInfo}>Acciones: {item.actions.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a', // Fondo negro
  },
  brokerContainer: {
    backgroundColor: '#9370DB', // Fondo morado
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  brokerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f2f2f2', // Texto claro
    marginBottom: 5,
  },
  brokerInfo: {
    fontSize: 16,
    color: '#f2f2f2', // Texto claro
    marginBottom: 3,
  },
});

export default BrokerScreen;