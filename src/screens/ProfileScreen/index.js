import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Auth, DataStore } from 'aws-amplify';
import APIService from '../../apiservices/apiService';
import { FlatList } from 'react-native-gesture-handler';
import { Gender } from '../../models';


const ProfileScreen = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [sports, setSports] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState('');
    const [language, setLanguage] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [sub, setSub] = useState('');



    const save = async () => {
        if (!isValid()) {
            console.warn('Not valid');
            return;
        }

        const authUser = await Auth.currentAuthenticatedUser();

        const newUser = {
            id: id,
            email: email,
            name: name,
            bio: bio,
            gender: gender,
            age: age ,
            sports: sports,
            location: location,
            language: language,
            skills: skills,
            image:
                'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG',
        };

        try {
            const createUserResponse = await APIService.createUser(newUser);
            console.log('User data saved successfully');
            console.log('User created:', createUserResponse);
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    const isValid = () => {

        return (
            name &&
            bio &&
            age &&
            gender &&
            language &&
            location &&
            skillLevel &&
            sports
        );
    };

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser();
                console.log(userInfo.sub);
                const userDetail = await APIService.getUser(userInfo.sub); // Changed to getUser
                console.log(JSON.stringify(userDetail, null, 2));
                setName(userDetail.name);
                setBio(userDetail.bio);
                setAge(userDetail.age);
                setGender(userDetail.gender);
                setEmail(userDetail.email);
                setLanguage(userDetail.language);
                setLocation(userDetail.location);
                setSkillLevel(userDetail.skills);
                setSports(userDetail.sports);

            } catch (error) {
                console.error("Error", error);
            }
        }
        getCurrentUser();

    }, []);
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', paddingVertical: 16}}>Profile</Text>
                    <Text>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Enter Email"
                        editable={true} // Prevent editing
                    />
                    <Text>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        placeholder="Enter Phone Number"
                        editable={true} // Prevent editing
                    />

                    <Text>Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Name...'
                        value={name}
                        onChangeText={setName} />

                    <Text>BIO:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Bio...'
                        multiline numberOfLines={3}
                        value={bio}
                        onChangeText={setBio} />

                    <Text>Language:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Language...'
                        multiline numberOfLines={3}
                        value={language}
                        onChangeText={setLanguage} />

                    <Text>Location:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Location...'
                        value={location}
                        onChangeText={setLocation} />

                    <Text>SkillLevel:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter your Skilllevel...'
                        value={skillLevel}
                        onChangeText={setSkillLevel} />

                    <Text>Age:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Age...'
                        value={age}
                        onChangeText={setAge} />

                    <Text>Gender:</Text>
                    <Picker prompt="Select Gender"
                        style={styles.pickers}
                        selectedValue={gender}
                        onValueChange={(itemValue) => {
                            console.log('Selected Gender:', itemValue);
                            setGender(itemValue);
                        }}>
                        <Picker.Item label='Male' value='MALE' />
                        <Picker.Item label='Female' value='FEMALE' />
                        <Picker.Item label='Other' value='OTHER' />
                    </Picker>

                    <Text>Sports:</Text>
                    <Picker
                        selectedValue={sports}
                        onValueChange={(itemValue) => {
                            console.log('Selected Sports:', itemValue);
                            setSports(itemValue)
                        }}>
                        <Picker.Item label='Basketball' value='BASKETBALL' />
                        <Picker.Item label='Football' value='FOOTBALL' />
                        <Picker.Item label='Cricket' value='CRICKET' />
                        <Picker.Item label='Baseball' value='BASEBALL' />
                        <Picker.Item label='Gym' value='GYM' />
                        <Picker.Item label='Running' value='RUNNING' />
                        <Picker.Item label='Table Tennis' value='TABLETENNIS' />
                        <Picker.Item label='Rugby' value='RUGBY' />
                    </Picker>

                    <Pressable onPress={save} style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;


const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        padding: 10,

    },
    container: {
        padding: 10
    },

    input: {
        margin: 10,
        borderBottomWidth: 1,
        borderWidth: 1,
        padding: 8,
        height: 45,
        borderRadius: 6

    },
    button: {
        backgroundColor: '#D62828',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
    },
    buttonText: {
        color: 'white'
    },
    pickers: {
        height: 150,
        marginBottom: 16

    }
})
