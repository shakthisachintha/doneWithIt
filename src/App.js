import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Switch, Button, Image, Text } from 'react-native';

import colors from './config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AuthNavigator from './navigation/AuthNavigator';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AccountNavigator from './navigation/AccountNavigator';


export default function App() {
  const requestPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    // const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) alert('You need to enable permission to use this feature!')
  }
  useEffect(() => {
    requestPermission()
  })

  const categories = [
    { label: "Furniture", value: 1, icon: "email", backgroundColor: "yellow" },
    { label: "Clothing", value: 2, icon: "lock", backgroundColor: "tomato" },
    { label: "Cameras", value: 3, icon: "lock", backgroundColor: "green" },
  ]

  const [imageURI, setImageURI] = useState();

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
        setImageURI(result.uri);
    } catch (error) {
      console.log("Error reading image");
    }
  }

  const Link = () => {
    const navigation = useNavigation();
    return (
      <Button
        title="Click"
        onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
      />
    )
  }

  const Tweets = ({ navigation }) => (
    <View>
      <Text>Tweets</Text>
      <Link />
    </View>
  );

  const TweetDetails = ({ route }) => (
    <View>
      <Text>Tweet Details {route.params.id}</Text>
    </View>
  )


  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
      animationEnabled: false
    }}>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.id })} name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  )

  const Account = () => (
    <View>
      <Text>Account</Text>
    </View>
  );

  const Feed = () => (
    <View>
      <Text>Feed</Text>
    </View>
  )

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'tomato',
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black"
      }}
    >
      <Tab.Screen options={{ tabBarIcon: ({ size, color }) => <Icon size={size} color={color} name="home" /> }} name="Account" component={AccountNavigator} />
      <Tab.Screen name="Feed" component={StackNavigator} />
    </Tab.Navigator>
  )


  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>

    /* <View style={styles.container}>
      <Button title="Select Image" onPress={selectImage}></Button>
      <Image style={styles.image} source={{ uri: imageURI }} ></Image>
    </View> */

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center"
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: 250,
    height: 250
  }
});
