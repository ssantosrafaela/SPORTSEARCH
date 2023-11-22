import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';


export default function PesquisaTop(props){
    const nav = useNavigation();
    return(
        <>
        <View style={styles.container}>
        <TextInput
        style={styles.box}
        onChangeText={(e) => props.setValue(e)}
        value={props.value}
        placeholder={props.label}
        placeholderTextColor={'#fff'}
      />
                <TouchableOpacity>
                    <Ionicons name="search" size={30} color='white' />
                </TouchableOpacity>    
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '8%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(3, 48, 252, 0.1)'
    },
    box: {
        paddingLeft: 18,
        marginBottom: 5,
        borderRadius: 10,
        width: 270,
        height: 40,
        borderColor: "#EF3006",
        borderWidth: 1,
        marginTop: 15,
        color: '#fff',
        fontSize: 15,
      },
      text: {
        color: "white",
        fontSize: 15,
      },
})