/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const TextInputJC = ({placeholder, secureTextEntry, pair}) => {
  const theme = useTheme();

  return (
    <TextInput
      style={[
        styles.textInput,
        {borderBottomColor: theme.colors.primary},
        {width: pair ? '45%' : '100%'},
      ]}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    padding: 10,
    borderBottomWidth: 2,
  },
});

export default TextInputJC;
