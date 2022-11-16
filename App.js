import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#C90F5B',
    secondary: '#ECA4C5',
    background: '#F8F8F8',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.primary,
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerShadowVisible: true,
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerTitle: 'WELCOME',
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'JC Registration App',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
