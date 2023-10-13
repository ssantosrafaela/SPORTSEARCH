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
      paddingLeft: 10,
      marginBottom: 5,
      borderRadius: 10,
      width: 270,
      height: 45,
      borderColor: "#EF3006",
      borderWidth: 1,
     // flexDirection: 'row',
      marginTop: 15,
      color: '#fff',


    },
    text: {
      color: "white",
    },
  });

  //  input: {
  //   borderWidth: 1,
  //   width: 270,
  //   height: 40,
  //   borderRadius: 10,
  //   borderColor: "#EF3006",
  //   marginBottom: 10,
  //   paddingLeft: 10,
  //   color: "#fff",
  //   fontSize: 18, 
  // },