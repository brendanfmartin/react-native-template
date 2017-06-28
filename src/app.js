import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';

class ReactNativeTemplate extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <Text>an App!</Text>
      </View>
    )
  }
}

export default ReactNativeTemplate;
