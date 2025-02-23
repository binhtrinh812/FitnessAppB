import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Seperator = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Seperator;