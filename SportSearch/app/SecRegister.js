import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from 'expo-router';
import Entrada from '../components/Entrada';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export default function SecRegister(){

    const nav = useNavigation();
    const [fontsLoaded] = useFonts({
        "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
        "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
      });

    const [textEmail, setEmail] = useState("");
    const [textSenha, setSenha] = useState("");
    const [textConfirmarSenha, setConfirmarSenha] = useState("");

    return(
        <>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <SafeAreaView>
            <View style={styles.container}>
             <Entrada
              text={"Email"}
              label={"Email: "}
              setValue={setEmail}
              value={textEmail}
            />

            <Entrada
              text={"Senha"}
              label={"Senha: "}
              setValue={setSenha}
              value={textSenha}
            />

            <Entrada
              text={"Confirmar Senha"}
              label={"Confirme sua Senha: "}
              setValue={setConfirmarSenha}
              value={textConfirmarSenha}
            />
            </View>
            </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1D2F4D",
    }
})