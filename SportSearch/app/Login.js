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
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const [textUser, setText] = useState("");
  const [textPassword, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);

  if (fontsLoaded) {
    return (
      <>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={MainStyle.container}
        >
          <View style={MainStyle.cima}>
            <Text style={MainStyle.titulo}>Sport Search</Text>
            <Text style={MainStyle.subtitulo}>Entre para continuar</Text>
          </View>

          <View style={MainStyle.meio}>
            <TextInput
              style={MainStyle.input}
              onChangeText={(e) => setText(e)}
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
                value={input}
                onChangeText={(texto) => setInput(texto)}
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
                onPress={() =>{ 
                  nav.navigate("Register")
                emailLogin(textUser,input)
              console.log(textUser, input)}}
              >
                <Text style={MainStyle.textoBotaoEntrar}>Entrar</Text>
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
