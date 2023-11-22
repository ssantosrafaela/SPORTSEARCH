import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import Baixo from '../components/Baixo'
import PesquisaTop from '../components/PesquisaTop';

export default function Home(){
    const [textPesquisa, setPesquisa] = useState("");
    const nav = useNavigation();
    return(
        <View style={styles.container}>
         
        <PesquisaTop 
        text={"Nome"}
        label="Pesquisar"
        setValue={setPesquisa}
        value={textPesquisa}/>

    <Baixo />    
            </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#1D2F4D",
    },
    text:{
        fontSize: 20,
        fontWeight:'bold'
    },
});