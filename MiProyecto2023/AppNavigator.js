import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import CountryScreen from './components/CountryScreen';
import ActionScreen from './components/ActionScreen';
import BrokerScreen from './components/BrokerScreen';
import UserScreen from './components/UserScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Countries" component={CountryScreen} />
      <Stack.Screen name="Actions" component={ActionScreen} />
      <Stack.Screen name="Users" component={UserScreen} />
      <Stack.Screen name="Brokers" component={BrokerScreen} />
      


    </Stack.Navigator>
  );
};

export default AppNavigator;