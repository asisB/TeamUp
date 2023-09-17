import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Auth} from 'aws-amplify';
import APIService from '../../apiservices/apiService';

const EditScreen = () => {
  const [userId, setUserId] = useState();
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
    try {
      const updatedUser = {
        id: userId,
        username: '',
        email: email,
        name: name,
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG',
        bio: bio,
        gender: gender,
        skill: skillLevel,
        language: language,
        sport: sports,
        age: age,
        location: location,
      };
      const updateUserRes = await APIService.updateUser(updatedUser);
      Alert.alert('Profile update successfully');
    } catch (error) {
      Alert.alert('Error on update profile');
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
        const authUser = await Auth.currentAuthenticatedUser();
        const userId = authUser.attributes.sub;
        setUserId(userId);
        const userDetail = await APIService.getUser(userId);
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
        console.error('Error', error);
      }
    };
  }, []);

  const getCurrentUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      const userId = authUser.attributes.sub;
      const userData = await APIService.getUser(userId);
      console.log(`user: ${JSON.stringify(userData, null, 2)}`);
      if (userData) {
        setUser(userData);
        setUserId(userId);
        setName(userData.name);
        setBio(userData.bio);
        setAge(userData.age);
        setGender(userData.gender);
        setEmail(userData.email);
        setLanguage(userData.language);
        setLocation(userData.location);
        setSkillLevel(userData.skill);
        setSports(userData.sport);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{fontSize: 22, fontWeight: 'bold', paddingVertical: 16}}>
            Profile
          </Text>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email"
            editable={true} // Prevent editing
          />
          <Text>Phone Number:</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            placeholder="Enter Phone Number"
            editable={true} // Prevent editing
          />

          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name..."
            value={name}
            onChangeText={setName}
          />

          <Text>BIO:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Bio..."
            multiline
            numberOfLines={3}
            value={bio}
            onChangeText={setBio}
          />

          <Text>Language:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Language..."
            multiline
            numberOfLines={3}
            value={language}
            onChangeText={setLanguage}
          />

          <Text>Location:</Text>
          <TextInput
            style={styles.input}
            placeholder="Location..."
            value={location}
            onChangeText={setLocation}
          />

          <Text>SkillLevel:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Skilllevel..."
            value={skillLevel}
            onChangeText={setSkillLevel}
          />

          <Text>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="Age..."
            value={age}
            onChangeText={setAge}
          />

          <Text>Gender:</Text>
          <Picker
            prompt="Select Gender"
            style={styles.pickers}
            selectedValue={gender}
            onValueChange={itemValue => {
              console.log('Selected Gender:', itemValue);
              setGender(itemValue);
            }}>
            <Picker.Item label="Male" value="MALE" />
            <Picker.Item label="Female" value="FEMALE" />
            <Picker.Item label="Other" value="OTHER" />
          </Picker>

          <Text>Sports:</Text>
          <Picker
            selectedValue={sports}
            onValueChange={itemValue => {
              console.log('Selected Sports:', itemValue);
              setSports(itemValue);
            }}>
            <Picker.Item label="Basketball" value="BASKETBALL" />
            <Picker.Item label="Football" value="FOOTBALL" />
            <Picker.Item label="Cricket" value="CRICKET" />
            <Picker.Item label="Baseball" value="BASEBALL" />
            <Picker.Item label="Gym" value="GYM" />
            <Picker.Item label="Running" value="RUNNING" />
            <Picker.Item label="Table Tennis" value="TABLETENNIS" />
            <Picker.Item label="Rugby" value="RUGBY" />
          </Picker>

          <Pressable onPress={save} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },

  input: {
    margin: 10,
    borderBottomWidth: 1,
    borderWidth: 1,
    padding: 8,
    height: 45,
    borderRadius: 6,
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
    color: 'white',
  },
  pickers: {
    height: 150,
    marginBottom: 16,
  },
});
