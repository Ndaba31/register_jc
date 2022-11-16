/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import TextInputJC from '../components/TextInputJC';
import ButtonJC from '../components/ButtonJC';

const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: theme.colors.primary}]}>
          Create Account
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.textInputPair}>
          <TextInputJC placeholder="First Name" pair={true} />
          <TextInputJC placeholder="Last Name" pair={true} />
        </View>
        <TextInputJC placeholder="Email" />
        <TextInputJC placeholder="Password" secureTextEntry={true} />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonJC
          title="Sign Up"
          onPress={() => {
            navigate.push('Home');
          }}
        />
        <ButtonJC
          title="Back"
          transparent={true}
          onPress={() => {
            navigate.pop();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  form: {
    flex: 2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    marginTop: 20,
    flex: 1,
  },
  textInputPair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SignUp;
