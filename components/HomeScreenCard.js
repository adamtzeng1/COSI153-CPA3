import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';

export default function HomeScreenCard() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Please type your name above to get started! And then Tap on Save Data!
      </Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
   
  },
  paragraph: {
    margin: 25,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
