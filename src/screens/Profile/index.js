import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Settings from '../../components/Setting';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';
import {Auth, DataStore} from 'aws-amplify';
import APIService from '../../apiservices/apiService';

const Profile = () => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const navigation = useNavigation('');

  const onPress = () => {
    console.log('Edit button pressed');
    navigation.navigate('EditProfile');
  };

  const onPressPersonal = () => {
    console.log('Press Personal Data');
  };

  const onPressNotification = () => {
    console.log('Press Notification');
  };

  const onPressHelpCenter = () => {
    console.log('Press Help Center');
    navigation.navigate('HelpCenter');
  };

  const onPressTermsofServices = () => {
    console.log('Press Services');
    navigation.navigate('Terms');
  };

  const getCurrentUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      const userId = authUser.attributes.sub;
      const userData = await APIService.getUser(userId);
      if (userData) {
        setUser(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileInnerContainer}>
          <Image
            source={{
              uri: user?.image || '',
            }}
            style={styles.image}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.subtitle}>{user.sport}</Text>
          </View>
        </View>
        <Pressable onPress={onPress} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>Settings</Text>
      <Pressable onPress={onPressPersonal} style={styles.personalInfo}>
        <View style={styles.personalInfo}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={16} color="#808080" />
          </View>
          <Text style={{marginLeft: 8}}>Personal Information</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#808080" />
      </Pressable>

      <Pressable onPress={onPressNotification} style={styles.personalInfo}>
        <View style={styles.personalInfo}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={16} color="#808080" />
          </View>
          <Text style={{marginLeft: 8}}>Notification</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#808080" />
      </Pressable>

      <Text style={styles.title}>Support</Text>
      <Pressable onPress={onPressHelpCenter} style={styles.personalInfo}>
        <View style={styles.personalInfo}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={16} color="#808080" />
          </View>
          <Text style={{marginLeft: 8}}>Help Center</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#808080" />
      </Pressable>

      <Pressable onPress={onPressTermsofServices} style={styles.personalInfo}>
        <View style={styles.personalInfo}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={16} color="#808080" />
          </View>
          <Text style={{marginLeft: 8}}>Terms Of Services</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#808080" />
      </Pressable>

      <Pressable onPress={() => Auth.signOut()} style={{marginTop: 8}}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');
const imageWidth = width * 0.2; // 20% of the screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  profileInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: imageWidth,
    width: imageWidth,
    borderRadius: imageWidth / 2,
  },
  nameContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#D62828',
    fontSize: 18,
    marginVertical: 16,
  },
  personalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
});

export default Profile;
