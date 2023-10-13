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
  // baixo: {
  //   flex: 0.4,
  //   backgroundColor: "#1D2F4D",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   zIndex: -1,
  // },
  titulo: {
    marginTop: 19,
    fontSize: 65,
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
continuar:{
  color: '#EF3006',
  fontSize: 20,
  paddingRight: 5,
  paddingLeft: 5,
  paddingTop: 5,
  paddingBottom: 5,
  borderWidth: 1,
  //borderRadius: 5,
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
}
});
