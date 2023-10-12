import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

import {Entypo} from '@expo/vector-icons'

export default function ButtonNew({ size, focused }){
    return(
        <View style = {[styles.container, { backgroundColor: focused ? '#EF3006' : '#C8300E'}]}>
           <Entypo name='plus' size={size} color={focused ? '#fff' : '#f8f8f8'}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
},


})