import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: "#1D2F4D",
    justifyContent: "center",
    alignItems: "center",
},
    text:{
        color: 'white',
},

})