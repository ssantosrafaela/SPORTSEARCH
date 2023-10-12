import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

export default function FrontPage() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
                
                onPress={() => nav.navigate("FrontPage")}
              ></TouchableOpacity>
      <Text>Essa é a página inicial!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83A1EF",
    justifyContent: "center",
    alignItems: "center",
  },
});
