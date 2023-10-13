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
import MainStyle from "../../components/StyleLogin";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import {
  emailLogin,
  auth,
  createUser,
  signOutFirebase,
} from "../../connections/firebase-auth";

export default function Login() {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const [textUser, setUser] = useState("");
  const [textPassword, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const tryLogin = async () => {
    const userCredential = await emailLogin(textUser, textPassword);
    if (userCredential) {
      console.log(userCredential.user);
   //   router.replace("register");
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
          <View style={MainStyle.cima}>
            <Text style={MainStyle.titulo}>Sport BAH</Text>
            <Text style={MainStyle.subtitulo}>Entre para continuar</Text>
          </View>

          <View style={MainStyle.meio}>
            <TextInput
              style={MainStyle.input}
              onChangeText={(e) => setUser(e)}
              value={textUser}
              placeholder="Insira seu usuário ou e-mail"
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

            <View style={MainStyle.checkboxContainer}>
              <Checkbox
                value={isSelected}
                onValueChange={setSelection}
                style={MainStyle.checkbox}
              />
              <Text style={MainStyle.checkboxText}>
                {" "}
                Quer se manter conectado?{" "}
              </Text>
            </View>

            <View style={MainStyle.botaoEnd}>
              <TouchableOpacity
                style={MainStyle.botaoEntrar}
                onPress={() => {
                 // nav.navigate("Register");
                  tryLogin()
                }}
              >
                <Text style={MainStyle.textoBotaoEntrar}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={MainStyle.botaoEntrar}
                onPress={() => {
                  nav.navigate("Register");
                  trySignOut()
                }}
              >
                <Text style={MainStyle.textoBotaoEntrar}>sair</Text>
              </TouchableOpacity>

            </View>
          </View>
          <View style={MainStyle.baixo}>
            <Text style={MainStyle.textoBaixo}>Esqueceu a senha?</Text>
            <TouchableOpacity
              style={MainStyle.botaoCadastre}
              onPress={() => nav.navigate("Register")}
            >
              <Text style={MainStyle.textoBotaoCadastre}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </>
    );
  } else {
    return null;
  }
}