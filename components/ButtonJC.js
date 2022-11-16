/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonJC = ({onPress, title, transparent}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.buttons,
        {backgroundColor: transparent ? 'none' : theme.colors.primary},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          {color: transparent ? theme.colors.primary : 'white'},
          {fontWeight: transparent ? '500' : 'bold'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttons: {
    height: 50,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    textTransform: 'uppercase',
  },
});

export default ButtonJC;
