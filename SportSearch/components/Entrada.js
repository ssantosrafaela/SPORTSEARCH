import { TextInput, StyleSheet, Text } from "react-native";

export default function Entrada(props) {

  return (
    <>
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
      width: 300,
      height: 50,
      borderColor: "#EF3006",
      borderBottomWidth: 1,
      flexDirection: 'row'
    },
    text: {
      color: "white",
    },
  });