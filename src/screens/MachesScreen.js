import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import users from '../../assets/data/user';


const MachesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 24, color: '#FCBF49'}}>
            MachesScreen
            </Text>
            <View style={styles.users}>
            {users.map(user => (
                <View style={styles.user} key={user.id}>
                    <Image source={{uri: user.image}} style={styles.image} />
                    </View>
            ))}
            </View>
        </View>
     
    </SafeAreaView>
  )
}

export default MachesScreen;


const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        padding: 10,

    },
    container: {
        padding: 10
    }, 
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap',    
    },
    user: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 50,

        borderWidth: 2, 
        padding: 3,
        borderColor: '#FCBF49',
    }, 
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    }, 
   
})
