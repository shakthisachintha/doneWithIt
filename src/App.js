import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, ImageBackground, Text } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomScreen from './screens/WelcomScreen';
import ViewImage from './screens/ViewImage';

import Icon from 'react-native-vector-icons/FontAwesome';

import AppText from './components/AppText';
import AppButton from './components/AppButton';
import ShopScreen from './screens/ShopScreen';


export default function App() {


  return (
    <ShopScreen></ShopScreen>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
