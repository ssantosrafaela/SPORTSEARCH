import React, {useState} from 'react';
import { TouchableWithoutFeedback ,StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';  

export default function Evento(){
    const nav = useNavigation();
    return(
        <>
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => alert("adicionou evento")}>
            <View style={styles.boxEvento}>
            <Text style={styles.texto}>Evento</Text>
            </View> 
            </TouchableWithoutFeedback>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2f4d',
    },
    texto:{
        color: 'white',
        fontSize: 20,
    },
    boxEvento:{
        width: '90%',
        height: '20%',
        borderRadius: 15,
        backgroundColor: '#EF3006',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,

    }
})