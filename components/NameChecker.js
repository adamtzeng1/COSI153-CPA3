import React, { useState} from 'react';
import {View,StyleSheet,Text, ScrollView, TextInput, Button} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const NameChecker = ({name}) => {
  const [newName, setNewName] = useState('')
  const navigation = useNavigation(); 
  
  if (name == ""){
    return (
      <View>
      <Text>Oops, you did not provide a name. Please provide your name.</Text>
      <TextInput
        placeholder = "Name here"
        onChangeText = {(newName) => setNewName(newName)}/>

      <Button
        title = "done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate('Home', {
            params: { name: newName },
            merge: true,
          });
        }}/>
      </View>
    )
  } else {
    return(
      <View>
      </View>
    )
    
  }
}
export default NameChecker
