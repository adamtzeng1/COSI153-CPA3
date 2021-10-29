import React, { useState, useEffect } from 'react'
import {View,StyleSheet,Text, ScrollView, TextInput} from 'react-native';
import HomeScreenCard from './HomeScreenCard';
import NameChecker from './NameChecker';
import SiteCard from './SiteCard';
const FourthScreen = ({route, navigation}) => {
  const {currentValue} = route.params;

  return (
    <ScrollView style = {styles.container}>
      <View style = {{borderWidth: 5, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>
        <Text>Current player:{currentValue}</Text>
      </View>
      <View>
        <Text style = {styles.textFormat}>
          Get Started On Your Tennis Journey.
        </Text>  
        <Text>
          The following are some buttons to get you started on equipment
        </Text>
        <View style = {{flexDirection: 'column', padding: 10}}>
          <SiteCard  site = "https://www.midwestsports.com/" name = "Tennis Point" />
          <SiteCard  site = "https://www.tennis-warehouse.com/" name = "Tennis Warehouse"/>
          <SiteCard  site = "https://www.tennis-express.com/" name = "Tennis Express"/>
        </View>

      </View>
    </ScrollView>
  )
}
export default FourthScreen

const styles = StyleSheet.create ({
    container:{
      flex:1,
      backgroundColor: 'lightblue',
    },
    textFormat: {
      fontSize: 30,
      textAlign: "center"
    }
})