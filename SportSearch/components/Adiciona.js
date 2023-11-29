import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function Adiciona(props) {
  const nav = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Entypo
            name="plus"
            size={40}
            color="white"
            style={styles.buttonInside}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
  button: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#EF3006",
    flexDirection: "row",
    backgroundColor: "#EF3006",
    // height: "8%",
    // width: '8%'
    //    justifyContent: 'right',
    //    alignItems: 'right',

    position: "absolute",
    bottom: 45,
    right: 45,
  },
  buttonInside: {
    padding: 10,
    justifyContent: "left",
  },
});
