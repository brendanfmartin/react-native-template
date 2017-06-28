import React from 'react';
import { View } from 'react-native';
import styles from './Card.styles';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export { Card };