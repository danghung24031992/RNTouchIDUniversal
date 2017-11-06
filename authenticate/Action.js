import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Style = StyleSheet.create({
  button: {
    height: 36,
    paddingLeft: 8,
    paddingRight: 8,
    fontWeight: 'bold'
  }
});

export default ({ title, onPress, style }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text style={[ style, Style.button ]}>{title}</Text>
    </TouchableHighlight>
  );
};
