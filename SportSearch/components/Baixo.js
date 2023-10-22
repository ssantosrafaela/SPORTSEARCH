import React from 'react';
import { StyleSheet, TouchableOpacity, View, } from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';


export default function Baixo(props){
    const nav = useNavigation();
    return(
        <>
        <View style={styles.baixo}>
        <TouchableOpacity onPress = {() => nav.navigate('Home')}>
                    <Entypo name="home" size={30} color='#fff' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Notification')}>
                    <MaterialCommunityIcons
                     name="bell" size={29} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Search')}>
                    <Ionicons name="search" size={31} color='white' />
                </TouchableOpacity>

                {/* <TouchableOpacity style = {styles.icon} onPress={() => nav.navigate('New')}>
                    <Entypo name="plus" size={25} color='white' />
                </TouchableOpacity> */}

                <TouchableOpacity onPress={() => nav.navigate('Profile')}>
                    <Ionicons name="person" size={30} color='white' />
                </TouchableOpacity>    
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    baixo:{
        width: '100%',
        height: '8%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(3, 48, 252, 0.1)'
    }
})