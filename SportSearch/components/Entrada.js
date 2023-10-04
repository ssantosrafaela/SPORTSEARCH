import { TextInput, StyleSheet, Text } from "react-native";

export default function Entrada(props) {

  return (
    <>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput
        style={styles.box}
        onChangeText={(e) => props.setValue(e)}
        value={props.value}
        placeholder={props.label}
        placeholderTextColor={'#fff'}
      />
    </>
  );
}
const styles = StyleSheet.create({
  
    box: {
      paddingLeft: 5,
      marginBottom: 5,
      width: 210,
      height: 30,
      borderColor: "#EF3006",
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row'
    },
    text: {
      color: "white",
    },
  });