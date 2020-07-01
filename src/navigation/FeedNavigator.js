import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import ShopScreen from '../screens/ShopScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Listings" component={ShopScreen}
            options={{ headerShown: false }}

        />
        <Stack.Screen name="ListingDetails" options={{ headerShown: false }} component={ListingDetailsScreen} />

    </Stack.Navigator>
)

export default FeedNavigator;