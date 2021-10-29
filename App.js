 import React, { useState }  from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ValueProvider from './components/ValueContext.js'
import HomeScreen from './components/HomeScreen.js'
import SecondScreen from './components/SecondScreen.js'
import ThirdScreen from './components/ThirdScreen'
import FourthScreen from './components/FourthScreen'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "SecondScreen" component = {SecondScreen}/>
        <Stack.Screen name = "ThirdScreen" component = {ThirdScreen}/>
        <Stack.Screen name = "FourthScreen" component = {FourthScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1
  }

}) 

