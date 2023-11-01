import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../app/Home';
import Search from '../app/Search';
import New from '../app/New';
import Notification from '../app/Notification';
import Profile from '../app/Profile';

import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Barrota(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions ={{
                // tabBarShowLabel: false,
                 tabBarStyle:{
                     backgroundColor: '#121212',
                     borderTopColor: 'transparent'
                     
                 },
                 activeTintColor: '#fff',
                 inactiveTintColor: '#92929c',
                 tabStyle:{
                     paddingBottom: 5,
                     paddingTop: 5, 
                 }
             }
         }
        >
            <Tab.Screen name="Home" component={Home}/>

            <Tab.Screen name="Search" component={Search}/>

            <Tab.Screen name="New" component={New}/>

            <Tab.Screen name="Notification" component={Notification}/>

            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}