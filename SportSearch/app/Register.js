import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import Entrada from "../components/Entrada";
import StyleRegister from "../components/StyleRegister";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";

export default function Register() {
  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const [textNome, setNome] = useState("");
  const [textSobrenome, setSobrenome] = useState("");
  // const [textGenero, setGenero] = useState("");
  const [textCidade, setCidade] = useState("");
  const [textTelefone, setTelefone] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [gnr, setGnr] = useState([
    { label: "Feminino", value: "Feminino" },
    { label: "Masculino", value: "Maculino" },
    { label: "Outro", value: "Outro" },
  ]);

  const [selected, setSelected] = useState("");
  const data = [
    { label: "Acre", value: "Acre" },
    { label: "Alagoas", value: "Alagoas" },
    { label: " Amapá", value: " Amapá" },
    { label: "Amazonas", value: "Amazonas" },
    { label: "Bahia", value: "Bahia" },
    { label: "Ceará", value: "Ceará" },
    { label: "Distrito Federal", value: "Distrito Federal" },
    { label: "Espírito Santo", value: "Espírito Santo" },
    { label: "Goiás", value: "Goiás" },
    { label: "Maranhão", value: "Maranhão" },
    { label: "Mato Grosso", value: "Mato Grosso" },
    { label: "Mato Grosso do Sul", value: "Mato Grosso do Sul" },
    { label: "Minas Gerais", value: "Minas Gerais" },
    { label: "Pará", value: "Pará" },
    { label: "Paraíba", value: "Paraíba" },
    { label: "Paraná", value: "Paraná" },
    { label: "Pernambuco", value: "Pernambuco" },
    { label: "Piauí", value: "Piauí" },
    { label: "Rio de Janeiro", value: "Rio de Janeiro" },
    { label: "Rio Grande do Norte", value: "Rio Grande do Norte" },
    { label: "Rio Grande do Sul", value: "Rio Grande do Sul" },
    { label: "Rondônia", value: "Rondônia" },
    { label: "Roraima", value: "Roraima" },
    { label: "Santa Catarina", value: "Santa Catarina" },
    { label: "São Paulo", value: "São Paulo" },
    { label: "Sergipe", value: "Sergipe" },
    { label: "Tocantins", value: "Tocantins" },
  ];

  if (fontsLoaded) {
    return (
      <>
       <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={StyleRegister.teste}>
        <ScrollView>
        <View>
        <View style={StyleRegister.cima}>
          <Text style={StyleRegister.titulo}>Sport Search</Text>
          <Text style={StyleRegister.subtitulo}>
            Digite os dados para se cadastrar
          </Text>
        </View>

        <View style={StyleRegister.meio}>
          <View>
            <Entrada
              text={"Nome"}
              label="Digite seu nome"
              setValue={setNome}
              value={textNome}
            />

            <Entrada
              text={"Sobrenome"}
              label="Digite seu sobrenome"
              setValue={setSobrenome}
              value={textSobrenome}
            />

            <Entrada
              text={"Telefone"}
              label={"Digite seu telefone"}
              setValue={setTelefone}
              value={textTelefone}
            />
            
            <SelectList
            value={data}
              setSelected={(e) => setSelected(e)}
              data={data}
              save="key"
              placeholder="Selecione seu estado:"
              placeholderTextColor={"#fff"}
              dropdownStyles={{
                width: 285,
                backgroundColor: "#fc4821",
                borderColor: "#EF3006",
                marginBottom: 20,
              }}
              boxStyles={{
                width: 285,
                borderColor: "#EF3006",
                marginBottom: 20,
              }}
              inputStyles={{ color: "white" }}
            />

            <SelectList
              value={gnr}
              setSelected={(e) => setGnr(e)}
              data={gnr}
              save="key"
              placeholder="Selecione seu gênero:"
              placeholderTextColor={"#fff"}
              dropdownStyles={{
                width: 285,
                backgroundColor: "#fc4821",
                borderColor: "#EF3006",
                marginBottom: 20,
              }}
              boxStyles={{
                width: 285,
                borderColor: "#EF3006",
                marginBottom: 20,
              }}
              inputStyles={{ color: "white" }}
            />
          </View>
        
        <View style={StyleRegister.baixo}>
          <Text style={StyleRegister.text}>
            Já Possui Cadastro?
            <TouchableOpacity
              //  style={MainStyle.botaoEntrar}
              onPress={() => nav.navigate("Login")}
            >
              <Text style={StyleRegister.text}>Entrar</Text>
            </TouchableOpacity>
          </Text>
          </View>
          </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </>
    );
  } else {
    return null;
  }
}
