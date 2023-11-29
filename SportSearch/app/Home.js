import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

  KeyboardAvoidingView,
} from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PesquisaTop from "../components/PesquisaTop";
import Baixo from "../components/Baixo";
import Adiciona from "../components/Adiciona";


export default function Home() {
  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });
  const [textPesquisa, setPesquisa] = useState("");

  if (fontsLoaded) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.containerScrollView}
      >
          <View style={styles.container}>

            <View style={styles.cima}>
              <Text style={styles.titulo}>Página Inicial</Text>
            </View>

            <PesquisaTop 
            text={"Nome"}
            label="Pesquisar"
            setValue={setPesquisa}
            value={textPesquisa}/>



          </View>
          <Adiciona />
          <View style={styles.baixo}>
            <Baixo />
            </View>
      </KeyboardAvoidingView>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D2F4D",
  },
  containerScrollView: {
    flex: 1,
    backgroundColor: "pink",
  },
  cima: {
    width: "100%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  meio: {
    width: "100%",
  },
  titulo: {
    fontSize: 20,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 10,
  },
  baixo:{
    backgroundColor: '#1D2F4D',
  }
  
});
