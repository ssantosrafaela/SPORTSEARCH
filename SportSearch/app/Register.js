import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import Entrada from "../components/Entrada";
import StyleRegister from "../components/StyleRegister";
import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Register() {
  const nav = useNavigation();
  const [fontsLoaded] = useFonts({
    "Archivo_ExtraCondensed-BlackItalic.ttf": require("../assets/fonts/Archivo_ExtraCondensed-BlackItalic.ttf"),
    "Archivo_Condensed-SemiBoldItalic.ttf": require("../assets/fonts/Archivo_Condensed-SemiBoldItalic.ttf"),
  });

  const [textNome, setNome] = useState("");
  const [textSobrenome, setSobrenome] = useState("");
  const [textTelefone, setTelefone] = useState("");

  //adding a data time picker
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };
  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

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
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={StyleRegister.teste}
        >
          <SafeAreaView style={StyleRegister.teste}>
            <ScrollView>
              <View style={StyleRegister.topBack}>
                <TouchableOpacity
                  onPress={() => nav.navigate("index")}
                  style={StyleRegister.back}
                >
                  <Ionicons name="arrow-back" color="#fff" size={30} />
                </TouchableOpacity>
              </View>

              <View style={StyleRegister.cima}>
                <Text style={StyleRegister.titulo}>Sport Search</Text>
                <Text style={StyleRegister.subtitulo}>
                  Insira seus dados para se cadastrar
                </Text>
              </View>

              <View style={StyleRegister.meio}>
                <View>
                  <Entrada
                    text={"Nome"}
                    label="Nome:"
                    setValue={setNome}
                    value={textNome}
                  />

                  <Entrada
                    text={"Sobrenome"}
                    label="Sobrenome: "
                    setValue={setSobrenome}
                    value={textSobrenome}
                  />

                  <Entrada
                    text={"Telefone"}
                    label={"Telefone: "}
                    setValue={setTelefone}
                    value={textTelefone}
                  />

                  <View style={StyleRegister.inputArea}>
                    <TouchableOpacity
                      onPress={() => showMode("date")}
                      style={StyleRegister.input}
                    >
                      <Text style={StyleRegister.text}>
                        Data de Nascimento:{" "}
                      </Text>
                      <DateTimePicker
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* <Entrada
              text={"Data de Nascimento"}
              label={"Data de Nascimento: "}
              setValue={setDataNascimento}
              value={textDataNascimento}
            /> */}

                  {/* <Entrada
              text={"Email"}
              label={"Email: "}
              setValue={setEmail}
              value={textEmail}
            />

            <Entrada
              text={"Senha"}
              label={"Senha: "}
              setValue={setSenha}
              value={textSenha}
            />

            <Entrada
              text={"Confirmar Senha"}
              label={"Confirme sua Senha: "}
              setValue={setConfirmarSenha}
              value={textConfirmarSenha}
            /> */}

                  <View style={StyleRegister.select}>
                    <SelectList
                      value={gnr}
                      setSelected={(e) => setGnr(e)}
                      data={gnr}
                      save="key"
                      placeholder="Selecione seu gênero:"
                      placeholderTextColor={"#fff"}
                      dropdownStyles={{
                        width: 270,
                      //  height: 40,
                        backgroundColor: "#fc4821",
                        borderColor: "#EF3006",
                        marginBottom: 20,
                      }}
                      boxStyles={{
                        width: 270,
                        height: 45,
                        borderColor: "#EF3006",
                        marginBottom: 20,
                      }}
                      inputStyles={{ color: "white" }}
                    />

                    <SelectList
                      value={data}
                      setSelected={(j) => setSelected(j)}
                      data={data}
                      save="key"
                      placeholder="Selecione seu estado:"
                      placeholderTextColor={"#fff"}
                      dropdownStyles={{
                        width: 270,
                        backgroundColor: "#fc4821",
                        borderColor: "#EF3006",
                        marginBottom: 20,
                        color: "#fff",
                      }}
                      boxStyles={{
                        width: 270,
                        height: 40,
                        borderColor: "#EF3006",
                        color: "#fff",
                      }}
                      inputStyles={{
                        color: "white",
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={StyleRegister.next}>
                <TouchableOpacity
                  onPress={() => nav.navigate("SecRegister")}
                  style={StyleRegister.next}
                >
                  <Text style={StyleRegister.continuar}>Continuar</Text>
                  <Ionicons name="arrow-forward" color="#fff" size={30} />
                </TouchableOpacity>
              </View>
            </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
      </>
    );
  } else {
    return null;
  }
}
