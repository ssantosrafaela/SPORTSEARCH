import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable} from 'react-native';
import { useFonts } from "expo-font";  
import { useNavigation } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../connections/firebase-auth';

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
                <Text style={styles.formTitle}>Redefinição de Senha</Text>
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
                <View style={styles.subContainer}>
                    <Pressable
                    onPress={() => nav.navigate('Login')}>
                        <Text>Voltar</Text>
                    </Pressable>
                </View>

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
        fontSize:30,
        fontFamily:'Archivo_ExtraCondensed-BlackItalic.ttf',
        marginTop:10,
        marginBottom:10,
    },
}) 