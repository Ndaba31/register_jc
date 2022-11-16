/* eslint-disable prettier/prettier */
import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import ButtonJC from '../components/ButtonJC';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageDiv}>
        <Image
          source={require('../images/JC_Logo.jpg')}
          style={styles.imageActual}
          accessibilityLabel="Jesus Calls Worship Center Logo"
        />
      </View>
      <View style={styles.buttonsDiv}>
        <ButtonJC
          title="Sign In"
          onPress={() => {
            navigate.push('SignIn');
          }}
        />
        <ButtonJC
          title="Sign Up"
          transparent={true}
          onPress={() => {
            navigate.push('SignUp');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-evenly',
    flex: 1,
  },
  imageDiv: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  imageActual: {
    width: 300,
    height: 300,
    minWidth: 200,
    minHeight: 200,
    flex: -1,
  },
  buttonsDiv: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default Welcome;
