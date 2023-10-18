import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cima: {
    flex: 0.8,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
  },
  meio: {
    flex: 1.5,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    marginTop: 30,
    fontSize: 70,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
  subtitulo: {
    color: "#fff",
    fontSize: 19,
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 17,
    marginBottom: 17,
  },

  picker: {
    backgroundColor: "#1D2F4D",
    borderColor: "#EF3006",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 5,
  },
  text: {
    color: "white",
  },
  teste : {
    flex: 1,
    backgroundColor: "#1D2F4D",
  },
  select: {
    marginTop: 15,
    marginBottom: 15,
  },
  topBack:{
    backgroundColor: '#1D2F4D',
   },
   back: {
    JustifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#1D2F4D',
    paddingLeft: 10,
},
  next:{
     backgroundColor: '#1D2F4D',

    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 110,
    flexDirection: 'row',
    marginTop: 20,
  },
entrar:{
  color: '#EF3006',
  fontSize: 30,
  paddingRight: 10,
  paddingLeft: 10,
  paddingTop: 10,
  paddingBottom: 10,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "#EF3006",
  backgroundColor: "#fff",
},
 input:{
   flexDirection: 'row',
 },
inputArea: {
  flexDirection: "row",
  width: 270,
  backgroundColor: "#1D2F4D",
  borderWidth: 1,
  borderRadius: 10,
  borderColor: "#EF3006",
  height: 45,
  alignItems: "center",
  marginTop: 15,
  marginBottom: 5
},
text:{
  fontSize: 15,
  color: '#fff',
  justifyContent: 'center', 
  alignItems: 'center',
  paddingLeft: 18,
  paddingTop: 7.5,
},

dados:{
  color: '#fff',
  fontSize: 18,
  fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
  textShadowColor: "#EF3006",
  textShadowRadius: 4,
  paddingTop: 10,
 // marginBottom: 20,
},
 dadosP:{
   marginTop: 50,
 },
 dadosE:{
  marginTop: 20,
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
});