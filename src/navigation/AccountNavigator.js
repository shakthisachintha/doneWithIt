import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import UserAccountScreen from '../screens/UserAccountScreen';
import MessageScreen from '../screens/MessageScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={UserAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Messages" component={MessageScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;