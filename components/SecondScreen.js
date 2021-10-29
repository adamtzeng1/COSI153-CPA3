import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import NameChecker from './NameChecker';
import { Card } from 'react-native-paper';

const SecondScreen = ({ route, navigation }) => {
  const { currentValue } = route.params;
  const [newName, setNewName] = useState('');
  if (currentValue !== '') {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            borderWidth: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text>Current player:{currentValue}</Text>
        </View>
        <View>
          <Text style={styles.textFormat}>Find new people to play with!</Text>
        </View>
        <Card>
          <Text>Player 1</Text>
          <Text>I want to be able to set up a messaging system between players</Text>
        </Card>
        <Card>  
          <Text>Player 2</Text>
          <Text>Message option place holder</Text>
        </Card>
        <Card>
          <Text>Player 3</Text>
          <Text>Message option Place holder</Text>
        </Card>
      </ScrollView>
    );
  }
};
export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  textFormat: {
    textAlign: 'center',
    fontSize: 50,
  },
});
