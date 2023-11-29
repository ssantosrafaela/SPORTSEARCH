import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';  

export default function Evento(){
    const nav = useNavigation();
    return(
        <>
        <View style={styles.container}>
            <Text>Evento</Text>
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
    }
})