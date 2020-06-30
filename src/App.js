import React, { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';

import colors from './config/colors';

import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';



export default function App() {

  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);


  return (
    <View style={styles.container}>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput placeholder="Email" icon="email" />
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
