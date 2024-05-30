import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SumadoraScreen from './screens/SumadoraScreen';
import TraductorScreen from './screens/TraductorScreen';
import MultiplicarScreen from './screens/MultiplicarScreen';
import VideoScreen from './screens/VideoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Sumadora" component={SumadoraScreen} />
        <Tab.Screen name="Traductor" component={TraductorScreen} />
        <Tab.Screen name="Multiplicar" component={MultiplicarScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
