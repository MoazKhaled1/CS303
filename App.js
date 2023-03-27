import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './components/Homescreen';
import SignInscreen from './components/SignInscreen';
import Register from './components/Register';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Login" component={SignInscreen} />
        <Stack.Screen name="SignUp" component={Register} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  };