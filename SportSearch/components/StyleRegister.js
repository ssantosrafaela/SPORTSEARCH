import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cima: {
    flex: 0.8,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  meio: {
    flex: 1.5,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
  },
  baixo: {
    flex: 1,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: -1,
  },
  titulo: {
    fontSize: 60,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
  subtitulo: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 17,
    marginBottom: 17,
  },
  textoBaixo: {
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    fontSize: 17,
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
});
