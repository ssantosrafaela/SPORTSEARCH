import { StyleSheet } from 'react-native';

export default StyleSheet.create({
     cima: {
    flex: 0.8,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
  },
  meio: {
    flex: 1.5,
    backgroundColor: '#1D2F4D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  baixo: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titulo: {
    fontSize: 50,
    fontFamily: "Archivo_ExtraCondensed-BlackItalic.ttf",
    color: "#fff",
    textShadowColor: "#EF3006",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
  subtitulo: {
    color: "#fff",
    fontFamily: "Archivo_Condensed-SemiBoldItalic.ttf",
    textShadowColor: "#EF3006",
    textShadowRadius: 4,
    marginTop: 10,
  },
  dadosNome: {
    //flexDirection: 'row'
  },
  botaoEntrar:{

  },
  picker:{
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    width: '60%',
    height: '5%'
  }
});