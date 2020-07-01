import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import WelcomScreen from "../screens/WelcomScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomScreen}
            options={{ headerShown: false }}

        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={LoginScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;