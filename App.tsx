import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/ProfileScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import RegistrationScreen from './screens/RegistrationScreen';

// TODO: Navigation Container

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
  
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // user is logged in
    const uid = user.uid;
    setIsLoggedIn(true);
    console.log("user is already logged in:", user.email);
  } else {
    // User is signed out
    setIsLoggedIn(false);
    console.log("user is not logged in");
  }
})

// TODO: Research how to convert this code to use a useContext hook for better practice

  }, []);

  return (
    <NavigationContainer>

      {isLoggedIn ? (
        // if user is logged in, show profile screen
        <Stack.Navigator>
          <Stack.Screen name="Login" component={ProfileScreen} />
        </Stack.Navigator>
      ): (
        // if user is not logged in, show login screen
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
        </Stack.Navigator>
      )};

      
    </NavigationContainer>
  );
}


// 1. setup the navigation for when user is logged out
// 2. setup the navigation for when user is logged in
// 3. listen whether use is logged in or not 

