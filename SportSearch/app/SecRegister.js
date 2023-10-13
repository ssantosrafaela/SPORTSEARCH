import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "expo-router";
import Entrada from "../components/Entrada";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import StyleRegister from "../components/StyleRegister";

export default function SecRegister() {
  const nav = useNavigation();
  //   const [fontsLoaded] = useFonts({
  //     "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
  //     "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  //   });

  //   const [textEmail, setEmail] = useState("");
  //   const [textSenha, setSenha] = useState("");
  //   const [textConfirmarSenha, setConfirmarSenha] = useState("");

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={StyleRegister.teste}
      >
        <SafeAreaView>
          <View style={StyleRegister.topBack}>
            <TouchableOpacity
              onPress={() => nav.navigate("Register")}
              style={StyleRegister.back}
            >
              <Ionicons name="arrow-back" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
          <View style={StyleRegister.cima}>
            <Text style={StyleRegister.titulo}>Sport Search</Text>
            <Text style={StyleRegister.subtitulo}>
              Insira seus dados para se cadastrar
            </Text>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D2F4D",
  },
  cima: {
    backgroundColor: "red",
    flex: 1,
  },
});
