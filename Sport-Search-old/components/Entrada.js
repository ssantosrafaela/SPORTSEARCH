import { TextInput, StyleSheet, Text } from "react-native";

export default function Entrada(props) {

  return (
    <>
      <Text style={styles.text}>{props.label}</Text>
      <TextInput
        style={styles.box}
        onChangeText={(e) => props.setValue(e)}
        value={props.value}
        placeholder={props.label}
        placeholderTextColor={'gray'}
      />
    </>
  );
}
const styles = StyleSheet.create({
  
    box: {
      paddingLeft: 5,
      marginBottom: 5,
      width: 250,
      height: 30,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
    },
    text: {
      color: "white",
    },
  });