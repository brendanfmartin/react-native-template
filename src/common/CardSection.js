import React from 'react';
import { View } from 'react-native';
import styles from './CardSection.styles';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export { CardSection };