import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home' 
import Search from './pages/Search'
import Notification from './pages/Notification'
import New from './pages/New'
import Profile from './pages/Profile'
import ButtonNew from '../components/ButtonNew'

import { Entypo, Feather, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
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
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({size, focused}) =>{
                    return(
                        <Entypo name="home" size={size} color={focused ? '#fff' : '#92929c'}/>
                    )
                }
            }}
            />

            <Tab.Screen
            name="Search"
            component={Search}
            options={{
                tabBarIcon: ({size, focused}) =>{
                    return(
                        <Feather name="search" size={size} color={focused ? '#fff' : '#92929c'}/>
                    )
                }
            }}
            />

            <Tab.Screen
            name="New"
            component={New}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ size, focused}) =>{
                    return(
                        <ButtonNew size={size} focused={focused}/>
                    )
                }
            }}
            />

            <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
                tabBarIcon: ({size, focused}) =>{
                    return(
                        <Entypo name="notification" size={size} color={focused ? '#fff' : '#92929c'}/>
                    )
                } 
            }}
            />

            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({size, focused}) =>{
                    return(
                        <Ionicons name="person-outline" size={size} color={focused ? '#fff' : '#92929c'}/>
                    )
                }
            }}
            />
        </Tab.Navigator>
    )
}