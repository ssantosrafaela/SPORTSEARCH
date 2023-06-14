import { Image, View, Text, StyleSheet, Linking } from "react-native";

export default function Splash() {
  const img = require("../assets/port.png");

  return (
    <>
      <View style={styles.container}>
        <Image source={img} style={styles.img} />
        </View>
      <View style ={styles.created}>
        <Text style={styles.text}>
          created by{" "}
          <Text
            style={styles.url}
            onPress={() => {
              Linking.openURL("https://www.instagram.com/ssportsearch/");
            }}>
            @ssantosrafaela
          </Text>
        </Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 6,
    width: "100%",
    backgroundColor: '#83A1EF',
    //backgroundColor: "#1d2f4d",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "90%",
    resizeMode: "contain",
  },
  text: {
    color: "#fff",
    marginBottom: 10,
  },
  url: {
    color: "#fff",
  },
 created: {
  flex: 1,
  backgroundColor: '#83A1EF',
  //backgroundColor: "#1d2f4d",
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
 }, 
});
