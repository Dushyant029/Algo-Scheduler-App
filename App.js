import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import Colors from './constants/Colors';

enableScreens();

export default function App() {

  return (
      <>        
        <StatusBar backgroundColor={Colors.green}  />
        <AppNavigator />
      </>
    );
}
