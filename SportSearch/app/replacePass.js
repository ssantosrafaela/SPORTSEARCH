import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable} from 'react-native';
import { useFonts } from "expo-font";  
import { useNavigation } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../connections/firebase-auth';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReplacePass(){
    const nav = useNavigation();    
    const [fontsLoaded] = useFonts({
        "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
        "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
      });
      const [userMail, setUserMail] = useState('');
 
      const replacePassword = async () => {
        if(userMail !== ''){
         sendPasswordResetEmail(auth, userMail)
         .then(() => {
             alert('Email enviado com sucesso!');
             nav.navigate('Login');
         })
         .catch((error) =>{
            const errorMessage = error.message;
            alert("Erro ao enviar email: " + errorMessage)
            return;
         })
        }else{
            alert('Preencha o campo de email!')
            return;
        }
      }

    return(
            <View style={styles.container}>
                 <View style={styles.topBack}>
              <TouchableOpacity
                onPress={() => nav.navigate("Login")}
                style={styles.back}
              >
                <Ionicons name="arrow-back" color="#fff" size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.cima}>
                <Text style={styles.formTitle}>Redefinição de Senha</Text>
                </View>
                <TextInput 
                style={styles.formInput}
                 placeholder="Digite seu email" 
                 keyboardType='email-address'
                 autoCapitalize='none'
                 autoComplete='email'
                 value={userMail}
                 onChangeText={setUserMail}
                 placeholderTextColor="#fff" />

                <Pressable
                    style={styles.sendButton}
                    onPress={replacePassword}
                    >
                        <Text style={styles.sendButtonText}>Enviar</Text>
                    </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1D2F4D',
        alignItems:'center',
        justifyContent:'center',
    },
    formTitle:{
        color:'#fff',
        fontSize:50,
        fontFamily:'Archivo_ExtraCondensed-BlackItalic.ttf',
        textShadowColor: "#EF3006",
        textShadowRadius: 4,
        marginBottom:10,
    },
    sendButton:{
        borderWidth:1,
        backgroundColor:'white',
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:30,
        color:'#EF3006',
        borderColor:'#EF3006',
    },
    sendButtonText:{
        color:'#EF3006',
        fontSize:20,
        fontFamily:'Archivo_Condensed-SemiBoldItalic.ttf',
    },
    formInput:{
        borderWidth:1,
        borderColor:'#EF3006',
        width:300,
        height:50,
        borderRadius:10,
        color:'#fff',
        paddingLeft:10,
        marginBottom:10,
        marginTop:120,
    },
    back: {
        JustifyContent: 'left',
        alignItems: 'left',
        backgroundColor: '#1D2F4D',
        marginRight: 40,
        paddingTop: 45,
        paddingLeft: 10,
    },
     topBack:{
      backgroundColor: '#1D2F4D',
     },
     cima:{
        backgroundColor: 'red',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17,
        flex: 1,
     }
}) 