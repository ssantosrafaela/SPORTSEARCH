import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

export default function New(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>New</Text>
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