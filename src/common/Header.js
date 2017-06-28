import React from 'react';
import { Text, View } from 'react-native';
import styles from './Header.styles';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

export { Header };