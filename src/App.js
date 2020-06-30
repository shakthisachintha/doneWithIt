import React, { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';

import colors from './config/colors';

import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';
import LoginScreen from './screens/LoginScreen';



export default function App() {

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ]

  const [category, setCategory] = useState();

  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
    </View>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
