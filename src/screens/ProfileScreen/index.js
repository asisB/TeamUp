import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Auth, DataStore } from 'aws-amplify';
import { User } from '../../models';


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

    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //         try {
    //             const user = await Auth.currentAuthenticatedUser();

    //             const dbUsers = await DataStore.query(
    //                 User,
    //                 u => u.sub === user.attributes.sub,
    //             );
    //             if (dbUsers.length < 0) {
    //                 return;
    //             }
    //             const dbUser = dbUsers[0];
    //             setUser(dbUser);

    //             setName(dbUser.name);
    //             setBio(dbUser.bio);
    //             setAge(dbUser.age);
    //             setGender(dbUser.gender);
    //             setLanguage(dbUser.language);
    //             setLocation(dbUser.location);
    //             setSkillLevel(dbUser.skillLevel);
    //             setSports(dbUser.sports);
    //         }
    //         catch (error) {
    //             console.log('error', error);

    //         }
    //      };
    //     getCurrentUser();

    // }, []);

    useEffect(() => {
        // Fetch the user's profile details when the component mounts
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();

            // 'userInfo' now contains user profile details
          //  console.log(JSON.stringify(userInfo));
            setUser(userInfo);

            const dbUsers = await DataStore.query(
                User,
                u => u.id === userInfo.getUsername(),
            );
            console.log(JSON.stringify(dbUsers, null, 2));
            if (dbUsers.length < 0) {
                return;
            }
            const dbUser = dbUsers[0];
            setUser(dbUser);

            setName(dbUser.name);
            setBio(dbUser.bio);
            setAge(dbUser.age);
            setGender(dbUser.gender);
            setLanguage(dbUser.language);
            setLocation(dbUser.location);
            setSkillLevel(dbUser.skillLevel);
            setSports(dbUser.sports);

            if (user.attributes.email) {
                setEmail(user.attributes.email);
            }

            if (user.attributes.phone_number) {
                setPhoneNumber(user.attributes.phone_number);
            }

        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };


    const isValid = () => {
        return name && bio && age && gender && language && location && skillLevel && sports;
    };

    const save = async () => {
        if (!isValid()) {
            console.warn('Not valid');
            return;
        }
        if (user) {
            // Update an existing user
            const updatedUser = User.copyOf(user, updated => {
                updated.name = name;
                updated.bio = bio;
                updated.gender = gender;
                updated.age = age;
                updated.sports = sports;
                updated.location = location;
                updated.language = language;
                updated.skillLevel = skillLevel;
            });

            await DataStore.save(updatedUser);
            Alert.alert('User data updated successfully');

        } else {
            // Create a new user
            const authUser = await Auth.currentAuthenticatedUser();

            const newUser = new User({
                sub: authUser.attributes.sub,
                name,
                bio,
                gender,
                age,
                sports,
                location,
                language,
                skillLevel,
                image:
                    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG',
                video:
                    'https://www.youtube.com/watch?v=Wt8jo1znYWA',
            });
            await DataStore.save(newUser);
        }
        Alert.alert('User data saved successfully');
    };


    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
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

                <TextInput
                    style={styles.input}
                    placeholder='Name...'
                    value={name}
                    onChangeText={setName} />

                <TextInput
                    style={styles.input}
                    placeholder='Bio...'
                    multiline numberOfLines={3}
                    value={bio}
                    onChangeText={setBio} />

                <TextInput
                    style={styles.input}
                    placeholder='Language...'
                    multiline numberOfLines={3}
                    value={language}
                    onChangeText={setLanguage} />

                <Picker prompt="Select Gender"
                    selectedValue={gender}
                    onValueChange={(itemValue) => {
                        console.log('Selected Gender:', itemValue);
                        setGender(itemValue);
                    }}>
                    <Picker.Item label='Male' value='MALE' />
                    <Picker.Item label='Female' value='FEMALE' />
                    <Picker.Item label='Other' value='OTHER' />
                </Picker>

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

                <TextInput
                    style={styles.input}
                    placeholder='Location...'
                    value={location}
                    onChangeText={setLocation} />

                <TextInput
                    style={styles.input}
                    placeholder='Skilllevel...'
                    value={skillLevel}
                    onChangeText={setSkillLevel} />
                <TextInput
                    style={styles.input}
                    placeholder='Age...'
                    value={age}
                    onChangeText={setAge} />

                <Pressable onPress={save} style={styles.button}>
                    <Text>Save</Text>
                </Pressable>

                <Pressable onPress={() => Auth.signOut()} style={styles.button}>
                    <Text>Sign out</Text>
                </Pressable>
            </View>

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
        borderBottomColor: '#f0f',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#D62828',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,

    }
})
