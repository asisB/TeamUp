import React from 'react';
import {
    Text,
    ImageBackground,
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';

const Favorite = (props) => {
      const { name, image, skill, bio } = props.user || {}; 
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.cardContainer}>
                <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.text}>{skill}</Text>
                <Text style={styles.text}>{bio}</Text>
                </View>
                <ImageBackground
                    source={{
                        uri: image,
                    }}
                    style={styles.image} />
            </View>
        </SafeAreaView>
    )
}


const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 8

    },
    cardContainer: {
        width: deviceWidth - 32,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    textContainer: {
        padding: 16,    
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,

    },
    text: {
        color: '#969696',
        marginVertical: 4
    },
    image: {
        width: 150,
        height: 150,

    }
});

export default Favorite;