import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import Checkbox from "expo-checkbox";
import Entrada from "../components/Entrada";
import StyleRegister from "../components/StyleRegister";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";

export default function Register() {
  const nav = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [textNome, setNome] = useState("");
  const [textSobrenome, setSobrenome] = useState("");
  const [textGenero, setGenero] = useState("");
  const [textCidade, setCidade] = useState("");
  const [textTelefone, setTelefone] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [ items, setItems] = useState([
    { label: "Feminino", value: "Feminino" },
    { label: "Masculino", value: "Maculino" },
    { label: "Não-Binário", value: "Não-Binário" }
  ]);

  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  if (fontsLoaded) {
    return (
      <>
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

            <Text></Text>
            <DropDownPicker
            placeholder="Gênero"
            placeholderTextColor={'#fff'}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style = {StyleRegister.picker}
            />

          </View>
          <View>
          
          
          </View>
    
        </View>

        <View style={StyleRegister.baixo}>
          <Text>
            Já Possui Cadastro?
            <TouchableOpacity
              //  style={MainStyle.botaoEntrar}
              onPress={() => nav.navigate("Login")}
            >
              <Text>Entrar</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </>
    );
  } else {
    return null;
  }
}
