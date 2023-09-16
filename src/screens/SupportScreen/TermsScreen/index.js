import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TermsScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Terms and policies</Text>
        <View style={styles.textContainer}>
        <Text style={styles.title}>Terms Of Uses</Text>
        <Text style={styles.text}>TeamUp is a platform which is now providing services of connecting with different partners. Our Terms of Use and Privacy Policy is to provide safe use of application for future use.</Text>
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
        alignItems: 'flex-start',
    },

    text: {
        fontSize: 18,   
        fontWeight: '400',
        alignItems: 'center',
        paddingHorizontal: 16,
    }
})

export default TermsScreen;