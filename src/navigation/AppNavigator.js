import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopScreen from '../screens/ShopScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} />
        <Tab.Screen options={{ title: "Add Listing" }} name="AddListing" component={ShopScreen} />
        <Tab.Screen options={{ title: "User Acount" }} name="Account" component={AccountNavigator} />
    </Tab.Navigator>
)

export default AppNavigator;