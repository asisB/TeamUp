import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HelpScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Hi, how can we help you</Text>

        <View style={styles.textContainer}>
        <Text style={styles.text}>Block User</Text>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#808080" />
        </View>

      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
       
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        margin: 16
    }, 

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },

    text: {
        fontSize: 18,   
        fontWeight: '400'
    }
})

export default HelpScreen;