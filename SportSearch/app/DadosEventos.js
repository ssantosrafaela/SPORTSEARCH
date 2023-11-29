import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { KeyboardAvoidingView } from "react-native";
import { addEventFirestore } from "../connections/firebase-store";

export default function DadosEventos() {
  const nav = useNavigation();

  const [nome, setNome] = React.useState("qaaa");
  const [data, setData] = React.useState("aaaaaaa");
  const [local, setLocal] = React.useState("aaaaaaa");
  const [observacoes, setObservacoes] = React.useState("aaaaaaaa");
  const [modalidade, setModalidade] = React.useState("aaaaaaaaa");
  const [horario, setHorario] = React.useState("aaaaaaaaa");
  const [vagas, setVagas] = React.useState("aaaaaaaa");
  const [valor, setValor] = React.useState("aaaaaaaaaaaaa");
  const [cidade, setCidade] = React.useState("aaaaa");
  const [estado, setEstado] = React.useState("aaaaaaaaa");
  const [atualPessoas, setAtualPessoas] = React.useState("aaaaaaaa");

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const tryCreateEvent = async () => {
      addEventFirestore(
        nome,
        local,
        cidade,
        estado,
        horario,
        data,
        vagas,
        atualPessoas,
        valor,
        observacoes
      );
      //await AsyncStorage.setItem('user', userCredential.user.uid);
      }

  if (fontsLoaded) {
    return (
      <>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.container}>
                <View style={styles.cima}>
                  <Text style={styles.titulo}>
                    Insira os dados do seu Evento
                  </Text>
                </View>

                <View style={styles.meio}>
                  <Text style={styles.texto}>Nome do Evento</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={(text) => setNome(text)}
                    setValue={setNome}
                    value={nome}
                  />
                  <Text style={styles.texto}>Modalidade</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Modalidade"
                    onChangeText={(text) => setModalidade(text)}
                    setValue={setModalidade}
                    value={modalidade}
                  />
                  <Text style={styles.texto}>Vagas</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Vagas"
                    onChangeText={(text) => setVagas(text)}
                    setValue={setVagas}
                    value={vagas}
                  />
                   <Text style={styles.texto}>Atual Pessoas</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Atual Pessoas"
                    onChangeText={(text) => setAtualPessoas(text)}
                    setValue={setAtualPessoas}
                    value={atualPessoas}
                  />
                   <Text style={styles.texto}>Estado</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Estado"
                    onChangeText={(text) => setEstado(text)}
                    setValue={setEstado}
                    value={estado}
                  />
                   <Text style={styles.texto}>Cidade</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    onChangeText={(text) => setCidade(text)}
                    setValue={setCidade}
                    value={cidade}
                  />
                  <Text style={styles.texto}>Data</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Data"
                    onChangeText={(text) => setData(text)}
                    setValue={setData}
                    value={data}
                  />
                  <Text style={styles.texto}>Local</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Local"
                    onChangeText={(text) => setLocal(text)}
                    setValue={setLocal}
                    value={local}
                  />

                  <Text style={styles.texto}>Horário</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Horário"
                    onChangeText={(text) => setHorario(text)}
                    setValue={setHorario}
                    value={horario}
                  />
                  <Text style={styles.texto}>Valor</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    onChangeText={(text) => setValor(text)}
                    setValue={setValor}
                    value={valor}
                  />
                  <Text style={styles.texto}>Descrição</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Observações"
                    onChangeText={(text) => setObservacoes(text)}
                    setValue={setObservacoes}
                    value={observacoes}
                  />
                </View>

                <View style={styles.baixo}>
                  <TouchableOpacity style={styles.botaoAdc} onPress={() => {tryCreateEvent(); nav.navigate("Home")}}>
                    <Text style={styles.textoBotao}>Adicionar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2f4d",
    width: "100%",
  },
  scrollviewContainer: {
    flex: 1,
    backgroundColor: "#1d2f4d",
    width: "100%",
  },
  cima: {
    width: "100%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 25,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#ef3006",
    textShadowRadius: 4,
    marginTop: 50,
  },
  meio: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "white",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#EF3006",
    borderRadius: 5,
    width: "90%",
    height: 40,
    marginBottom: 10,
  },
  baixo: {
    width: "100%",
    height: "6%",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoAdc: {
    flex: "start",
    borderWidth: 1.3,
    width: 250,
    height: 40,
    borderRadius: 5,
    borderColor: "#EF3006",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textoBotao: {
    color: "#EF3006",
    fontSize: 18,
  },
  key: {
    backgroundColor: "green",
  },
});
