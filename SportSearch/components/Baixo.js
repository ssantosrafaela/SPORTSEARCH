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
                    <Entypo name="home" size={30} color='#1D2F4D' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Notification')}>
                    <MaterialCommunityIcons
                     name="bell" size={29} color='#1D2F4D' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Profile')}>
                    <Ionicons name="person" size={30} color='#1D2F4D' />
                </TouchableOpacity>    
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    baixo:{
        width: '100%',
        height: 70,
        paddingTop: 10,
        paddingBottom: 15,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#EF3006',
        borderRadius: 15,
        
    }
})