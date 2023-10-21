import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
    const nav = useNavigation();
    return( 
    <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.containerScrollView}
      >
        <SafeAreaView style={styles.containerScrollView}>
            <ScrollView>
         
        <View style={styles.container}>
            <View style={styles.cima}>
                <Text> Pagina Inicial </Text>
            </View>

            <Text style={styles.text}>CASACA</Text>


            <View style={styles.inferior}>
                <TouchableOpacity onPress = {() => nav.navigate('Home')}>
                    <Entypo name="home" size={30} color='#fff' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Search')}>
                    <Feather name="search" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.icon} onPress={() => nav.navigate('New')}>
                    <Entypo name="plus" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Notification')}>
                    <Entypo name="notification" size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate('Profile')}>
                    <Ionicons name="person-outline" size={30} color='white' />
                </TouchableOpacity>    
            </View>

            </View>
            </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
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
    inferior: {
        width: '100%',
        height: '6%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#001127',
    },
    icon:{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
});