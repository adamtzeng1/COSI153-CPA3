import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  Linking,
} from 'react-native';
import { Card } from 'react-native-paper';

export default function SiteCard({ site , name}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Card style = {{width:'50%', margin: 10}}>
          <Text style = {styles.paragraph}>
            {name}
          </Text>
          <Button
            title="GO NOW"
            onPress={() => Linking.openURL(site.toString())}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: "lightgreen",
  },
  paragraph: {
    margin: 0,
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
