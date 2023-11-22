import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import Baixo from "../components/Baixo";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  if (fontsLoaded) {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scroll}>
            <View style={styles.container}>
              <View style={styles.cima}>
                <Text>Perfil</Text>
              </View>
              <Baixo />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D2F4D",
  },
  scroll: {
    backgroundColor: "#fff",
  },
});
