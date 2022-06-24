import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Solar Panel App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'black',
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'Bold',
    padding: 25,
  },
});
