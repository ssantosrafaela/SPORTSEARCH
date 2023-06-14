import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Login() {

  const [textUser, setText] = useState('');
  const [textPassword, setPassword] = useState('');
  const entrar = "entrar";


  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Seja bem-vindo ao SportSearch!</Text>
      </View>
      <View>
        <Text>Entre para continuar!</Text>
      </View>

      <TextInput
        style={styles.box}
        onChangeText={(e) => setText(e)}
        value={textUser}
        placeholder="Usuário ou E-mail"
      />
      <TextInput
        style={styles.box}
        onChangeText={(e) => setPassword(e)}
        value={textPassword}
        placeholder="Digite sua senha"
      />

      <View>
        <TouchableOpacity>
          <Text>{entrar}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.password}>
        <Text>Esqueceu a senha?</Text>
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#83A1EF",
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
   },
   box: {
     paddingLeft: 5,
     marginBottom: 5,
     width: 250,
     height: 40,
     borderColor: "black",
     borderWidth: 1,
     borderRadius: 10,
   },
   entrar: {
     borderWidth: 1,
   },
   password: {
     backgroundColor: "white",
   },
});
