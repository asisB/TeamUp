import React, {useState} from 'react';
import { View, StyleSheet, Image, ImageBackground, Pressable, Text, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CustomButton from '../CustomButton'
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps'; 

const CardDetail = () => {
    const [isSave, setAsSave] = useState(false);

    const navigation = useNavigation();

    const onPress = () => {
        console.log('Pressed massage')
    }

    const goBackPress = () => {
        console.log('HomeScreen');
        navigation.goBack();
    }


  const onPressAsSAve = () => {
    setAsSave(!isSave);
  };


    const onSendRequest = () => {
        console.log('Send Request');
    }

    return (
        <ScrollView style={styles.root}>
            <ImageBackground
                style={styles.imageContainer}
                source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
                }}
            >
                <View style={styles.iconContainer}>
                    <Pressable onPress={goBackPress}  style={styles.iconLeft}>
                        <Ionicons name="chevron-back" size={30} color="white" />
                    </Pressable>
                    <Pressable style={styles.iconRight} onPress={onPressAsSAve}>
                        <Fontisto name="favorite" size={30} color={isSave ? '#FCBF49' : 'white'}/>
                    </Pressable>
                </View>
            </ImageBackground>
            <View style={styles.titleConatiner}>
                <Text style={styles.title}>Bikal Singh Thapa</Text>
                <Pressable onPress={onPress}>
                    <Text style={styles.text}>Message</Text>
                </Pressable>
            </View >

            <View style={styles.experinceConatiner} >
                <Text style={styles.text}>Expert</Text>
                <View style={styles.line}></View>
                <Text style={styles.text}>Uxbridge</Text>
            </View>
            <Text style={styles.texts}>Basketball</Text>

            <View style={styles.lineContainer}></View>

            <View style={styles.containerX}>
                <Text style={styles.titleX}>About</Text>
                <View style={styles.aboutConatinerX}>
                    <View style={styles.containerY}>
                        <View style={styles.icons}>
                            <FontAwesome name="chess-knight" size={18} color="white" />
                        </View>
                        <View style={styles.containerX}>
                            <Text style={styles.title}>Skills</Text>
                            <Text>Intermediate</Text>
                        </View>
                    </View>
                    <View style={styles.experinceConatiner}>
                        <View style={styles.containerY}>
                            <View style={styles.icons}>
                                <MaterialIcons name="sports-basketball" size={18} color="white" />
                            </View>
                            <View style={styles.containerX}>
                                <Text style={styles.title}>Sports</Text>
                                <Text>Basketball</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.aboutConatinerX}>
                    <View style={styles.containerY}>
                        <View style={styles.icons}>
                            <Fontisto name="radio-btn-active" size={18} color="white" />
                        </View>
                        <View style={styles.containerX}>
                            <Text style={styles.title}>Availability</Text>
                            <Text>Yes</Text>
                        </View>
                    </View>
                    <View style={styles.experinceConatiner}>
                        <View style={styles.containerY}>
                            <View style={styles.icons}>
                                <MaterialIcons name="calendar-today" size={18} color="white" />
                            </View>
                            <View style={styles.containerX}>
                                <Text style={styles.title}>Age</Text>
                                <Text>20</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.aboutConatinerX}>
                    <View style={styles.containerY}>
                        <View style={styles.icons}>
                            <Fontisto name="language" size={18} color="white" />
                        </View>
                        <View style={styles.containerX}>
                            <Text style={styles.title}>Language</Text>
                            <Text>English</Text>
                        </View>
                    </View>
                </View>

            </View>

            <View style={styles.lineContainer}></View>

            <View style={styles.containerX}>
                <Text style={styles.title}>Bio</Text>
                <Text style={styles.text}>Hi, I'm Bikal Singh Thapa, a passionate basketball player with a love for the game that runs deep. Born and raised in the basketball-crazed city of Chicago, I have been honing my skills on the court since a young age. With a towering height of 6'7" and a wingspan that seems to stretch forever, I thrive in the power forward position.</Text>
            </View>

            <View style={styles.lineContainer}></View>

            <View style={styles.containerX}>
                <Text style={styles.title}>Map View</Text>
                <MapView style={styles.mapStyle} 
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                />
                <Marker 
                draggable
                coordinate={{
                    latitude: 51.5485, 
                    longitude:  -0.479611,
                }}
                title={'Location'}
                  />
            </View>
            <View style={{ padding: 16 }}>
                <CustomButton
                    text="Make Partner"
                    onPress={onSendRequest} />
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    imageContainer: {
        height: 350,
        width: '100%',
        position: 'relative',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 36,
        left: 16,
        right: 16,
    },
    iconLeft: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 36,
        padding: 8,
    },

    containerX: {
        flexDirection: 'column',
        paddingHorizontal: 16
    },
    containerY: {
        flexDirection: 'row',
        marginVertical: 8
    },

    iconRight: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 36,
        padding: 8,
    },
    titleConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8

    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    titleX: {
        fontSize: 18,
        fontWeight: '600',
    },
    text: {
        fontWeight: '300'
    },
    experinceConatiner: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    line: {
        width: 2,
        height: 10,
        backgroundColor: 'grey',
        marginHorizontal: 16
    },
    texts: {
        fontWeight: '300',
        paddingHorizontal: 16
    },
    lineContainer: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#000',
        marginVertical: 16
    },
    icons: {
        width: 35,
        height: 35,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutConatinerX: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8

    },
    mapStyle: {
        height: 200, 
        width: '100%'
    }
});

export default CardDetail;
