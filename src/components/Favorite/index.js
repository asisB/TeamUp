import React from 'react';
import {
    Text,
    ImageBackground,
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';

const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
        return text.slice(0, maxLength - 3) + '...';
    }
    return text;
};


const Favorite = (props) => {
    const { name, image, skill, bio } = props.user?.markedUser || {};
    const truncatedBio = truncateText(bio, 25);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.cardContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.text}>{skill}</Text>
                    <Text style={styles.text}>{truncatedBio}</Text>
                </View>
                {image && (<ImageBackground
                    source={{
                        uri: image,
                    }}
                    style={styles.image}
                    testID="user-image" />
                )}
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
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    textContainer: {
        padding: 8,
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
        justifyContent: 'center', 
        alignItems: 'center'

    }
});

export default Favorite;