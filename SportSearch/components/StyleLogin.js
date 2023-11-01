import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#1D2F4D",
    flex: 1,
  },
  cima: {
    width: "100%",
    height: "45%",
    backgroundColor: "#1D2F4D",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  meio: {
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 130,
  },
  baixo: {
    backgroundColor: "#1D2F4D",
    alignItems: "center",
  },
  titulo: {
    fontSize: 75,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
  subtitulo: {
    fontSize: 20,
    color: "white",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    width: 270,
    height: 40,
    borderRadius: 10,
    borderColor: "#EF3006",
    marginBottom: 10,
    paddingLeft: 10,
    color: "#fff",
    fontSize: 18, 
  },
  inputArea: {
    flexDirection: "row",
    width: 270,
    backgroundColor: "#1D2F4D",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EF3006",
    height: 40,
    alignItems: "center",
  },
  inputTeste: {
    width: 220,
    height: 50,
    color: "#fff",
    padding: 10,
    fontSize: 18,
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoEntrar: {
    borderWidth: 1,
    borderRadius: 3,
    width: 120,
    height: 35,
    marginTop: 20,
    borderColor: "#EF3006",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoEntrar: {
    color: "#EF3006",
    fontSize: 18,
  },
  botaoEnd: {
    position: "absolute",
    top: 120,
    right: 65,
  },
  textoBaixo: {
    marginBottom: 20,
    color: "#fff",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    fontSize: 17,
    textShadowOffset: { width: 4, height: 4 },
  },
  back: {
    JustifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#1D2F4D',
    marginRight: 40,
    paddingTop: 45,
    paddingLeft: 10,
},
 topBack:{
  backgroundColor: '#1D2F4D',
 },
 scrollview:{
  backgroundColor: '#1D2F4D',
  marginTop: 30,
 },
 scrollviewContainer:{
  backgroundColor: '#1D2F4D',
 },
});