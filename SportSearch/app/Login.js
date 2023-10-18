import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import MainStyle from "../components/StyleLogin";
import { Ionicons } from "@expo/vector-icons";
import {
  emailLogin,
  auth,
  createUser,
  signOutFirebase,
} from "../connections/firebase-auth";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });
  const [textUser, setUser] = useState("");
  const [textPassword, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const tryLogin = async () => {
    const userCredential = await emailLogin(textUser, textPassword);
    if (userCredential) {
      console.log(userCredential.user);
    } else {
      alert("erro");
    }
  };

  const tryCreateUser = async () => {
    createUser(textUser, textPassword, "Nome da pessoa");
  };

  const trySignOut = async () => {
    signOutFirebase();
  };
  const printAuth = () => {
    console.log(auth.currentUser);
  };

  if (fontsLoaded) {
    return (
      <>
         <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={MainStyle.container}
        > 
              <View style={MainStyle.topBack}>
                <TouchableOpacity
                  onPress={() => nav.navigate("index")}
                  style={MainStyle.back}
                >
                  <Ionicons name="arrow-back" color="#fff" size={30} />
                </TouchableOpacity>
              </View>
              <View style={MainStyle.cima}>
                <Text style={MainStyle.titulo}>Sport Search</Text>
                <Text style={MainStyle.subtitulo}>Entre para continuar</Text>
              </View>
                <View style={MainStyle.meio}>
                  <TextInput
                    style={MainStyle.input}
                    onChangeText={(e) => setUser(e)}
                    value={textUser}
                    placeholder="E-mail"
                    placeholderTextColor={"#fff"}
                    keyboardType="email-address"
                  />

                  <View style={MainStyle.inputArea}>
                    <TextInput
                      style={MainStyle.inputTeste}
                      placeholder="Insira sua senha"
                      placeholderTextColor={"#fff"}
                      value={textPassword}
                      onChangeText={(t) => setPassword(t)}
                      secureTextEntry={hidePass}
                    />
                    <TouchableOpacity
                      style={MainStyle.icon}
                      onPress={() => setHidePass(!hidePass)}
                    >
                      {hidePass ? (
                        <Ionicons name="eye" color="#fff" size={25} />
                      ) : (
                        <Ionicons name="eye-off" color="#fff" size={25} />
                      )}
                    </TouchableOpacity>
                  </View>
                        
                    <TouchableOpacity
                      style={MainStyle.botaoEntrar}
                      onPress={() => {
                        if (textUser == "" || textPassword == "") {
                          alert("Preencha os campos");
                        } else {
                          tryLogin(nav.navigate("Register"));
                        }
                      }}
                    >
                      <Text style={MainStyle.textoBotaoEntrar}>Entrar</Text>
                    </TouchableOpacity>
                  </View>
             
              <View style={MainStyle.baixo}>
                <Text style={MainStyle.textoBaixo}>Esqueceu a senha?</Text>
              </View>
       </KeyboardAvoidingView>
      </>
    );
  } else {
    return null;
  }
}
