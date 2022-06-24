import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from './AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          style={styles.commButton}
          onPress={() => {
            this.props.navigation.navigate('ComScreen');
          }}>
          <Text style={styles.commButtonText}> COMMERCIAL USE </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.privButton}
          onPress={() => {
            this.props.navigation.navigate('PrivScreen');
          }}>
          <Text style={styles.privButtonText}> PRIVATE USE </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commButton: {
    backgroundColor: 'red',
    marginLeft: 70,
    marginTop: 60,
    borderWidth: 1,
    alignItems: 'center',
    width: 200,
    height: 80,
    borderRadius: 30,
    justifyContent: 'center',
  },
  commButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  privButton: {
    backgroundColor: 'yellow',
    marginLeft: 70,
    marginTop: 60,
    borderWidth: 1,
    alignItems: 'center',
    width: 200,
    height: 80,
    borderRadius: 30,
    justifyContent: 'center',
  },
  privButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
