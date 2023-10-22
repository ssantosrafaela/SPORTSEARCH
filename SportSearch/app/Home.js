import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Baixo from '../components/Baixo';

export default function Home(){
    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
        "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
      });

if (fontsLoaded){
    return( 
    <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.containerScrollView}
      >
        <SafeAreaView style={styles.containerScrollView}>
            
         
        <View style={styles.container}>
            <View style={styles.cima}>
                <Text style = {styles.titulo}> Sport Search </Text>
            </View>

            <Text style={styles.text}>CASACA</Text>


            <Baixo/>

            </View>
           
        </SafeAreaView>
        </KeyboardAvoidingView>

    );
} else {
    return null;
}
}
const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#1D2F4D"
    },
    containerScrollView:{
        flex: 1,
        backgroundColor: "#1D2F4D"
    },
    text:{
        fontSize: 20,
        fontWeight:'bold'
    },
    cima:{
        width: "100%",
        height: "6%"
    },
    meio:{
        width: '100%',

    },
    titulo:{
        color: "#fff",
        fontSize: 19,
        fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
        textShadowColor: "#EF3006",
        textShadowRadius: 4,
        marginTop: 17,
        marginBottom: 30,
    },
});