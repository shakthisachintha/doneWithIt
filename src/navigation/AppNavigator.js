import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import LoginScreen from '../screens/LoginScreen';
import NewListingButton from './NewListingButton';
import colors from '../config/colors';


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator tabBarOptions={{ activeBackgroundColor: colors.white }}>
        <Tab.Screen
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />
            }}
            name="Feed"
            component={FeedNavigator}
        />

        <Tab.Screen
            options={({ navigation }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("AddListing")} />,
            })}
            name="AddListing"
            component={LoginScreen}
        />

        <Tab.Screen options={{
            tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={size} />
        }} name="Account" component={AccountNavigator} />
    </Tab.Navigator>
)

export default AppNavigator;