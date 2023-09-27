import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import {Auth} from 'aws-amplify';
import APIService from '../../apiservices/apiService';
import uuid from 'react-native-uuid';

const CardDetail = ({route}) => {
  const {user} = route.params;
  const [isBookmarked, setBookmarked] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [bookmark, setBookmark] = useState();
  const [currentUserID, setCurrentUserID] = useState();
  const [matchTeam, setMatchTeam] = useState([]); 

  const [region, setRegion] = useState({
    latitude: 51.5074,
    longitude: -0.1278,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const navigation = useNavigation();

  const onPress = () => {
    console.log('Pressed massage');
  };

  const goBackPress = () => {
    console.log('HomeScreen');
    navigation.goBack();
  };

  const onBookmarkPress = async () => {
    try {
      if (isBookmarked) {
        const input = {
          id: bookmark.id,
        };
        await APIService.removeFromBookmark(input);
      } else {
        const input = {
          id: uuid.v4(),
          markedUserID: user?.id,
          userID: currentUserID,
        };
        await APIService.addToBookmark(input);
        fetchData();
      }
      setBookmarked(!isBookmarked);
    } catch (error) {
      console.log('Error adding to bookmarks:', error);
    }
  };

  const onPressMakePartner = async () => {
    try {
      const input = {
        id: uuid.v4(),
        userID: user?.id,
        receiverID: user.id,
        senderID: currentUserID,
        status: 'REQUESTED',
      };
      const res = await APIService.createConnection(input);
      if (res) {
        console.log('Request sent successfully');
        Alert.alert('Request Sent', res);

        const updatedMatchTeam = matchTeam.filter(item => item.id !== user.id);
        setMatchTeam(updatedMatchTeam);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const fetchData = async () => {
    try {
      // Current user information
      const authUser = await Auth.currentAuthenticatedUser();
      const userId = authUser.attributes.sub;
      setCurrentUserID(userId);

      const connectedUserRes = await APIService.getConnectedUser(userId);

      const connectedUserIDs = connectedUserRes.map(user => user.receiverID);

      const bookmarkedUsers = await APIService.getBookmarkUsers(userId);

      const bookmarks = bookmarkedUsers.find(
        item => item.markedUser.id === user.id,
      );

      if (bookmarks) {
        console.log(`bookmarks`, JSON.stringify(bookmarks));
        setBookmark(bookmarks);
        setBookmarked(true);
      } else {
        setBookmarked(false);
      }
    } catch (error) {
      console.log(`fetch-data:`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.root}>
      <ImageBackground
        style={styles.imageContainer}
        source={{
          uri: user?.image || '',
        }}>
        <View style={styles.iconContainer}>
          <Pressable onPress={goBackPress} style={styles.iconLeft}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </Pressable>
          <TouchableOpacity
            style={styles.iconRight}
            onPress={() => onBookmarkPress()}>
            <Fontisto
              name="favorite"
              size={30}
              color={isBookmarked ? '#FCBF49' : 'white'}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.titleConatiner}>
        <Text style={styles.title}>{user.name}</Text>
        <Pressable onPress={onPress}>
          <Text style={styles.text}>Message</Text>
        </Pressable>
      </View>

      <View style={styles.experinceConatiner}>
        <Text style={styles.text}>{user.skill}</Text>
        <View style={styles.line}></View>
        <Text style={styles.text}>{user.location}</Text>
      </View>
      <Text style={styles.texts}>{user.sport}</Text>
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
              <Text>{user.skill}</Text>
            </View>
          </View>
          <View style={styles.containerY}>
            <View style={styles.icons}>
              <MaterialIcons name="sports-basketball" size={18} color="white" />
            </View>
            <View style={styles.containerX}>
              <Text style={styles.title}>Sports</Text>
              <Text>{user.sport}</Text>
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
            <View style={styles.containerYX}>
              <View style={styles.icons}>
                <MaterialIcons name="calendar-today" size={18} color="white" />
              </View>
              <View style={styles.containerX}>
                <Text style={styles.title}>Age</Text>
                <Text>{user.age}</Text>
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
              <Text>{user.language}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.lineContainer}></View>

      <View style={styles.containerX}>
        <Text style={styles.title}>Bio</Text>
        <Text style={styles.text}>{user.bio}</Text>
      </View>

      <View style={styles.lineContainer}></View>

      <View style={styles.containerX}>
        <Text style={styles.title}>Map View</Text>
        <MapView
          initialRegion={region}
          style={styles.mapStyle}
          onRegionChangeComplete={region => setRegion(region)}>
          <Text style={styles.text}>Current latitude: {region.latitude}</Text>
          <Text style={styles.text}>Current longitude: {region.longitude}</Text>

          <Marker coordinate={region} title={'My Location'} />
        </MapView>
      </View>
      <View style={{padding: 16}}>
        <CustomButton text="Make Partner" onPress={onPressMakePartner} />
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
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  containerY: {
    flexDirection: 'row',
    marginVertical: 8,
  },

  containerYX: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginRight: 32,
    maxWidth: '100%',
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
    paddingVertical: 8,
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
    fontWeight: '300',
  },
  experinceConatiner: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  line: {
    width: 2,
    height: 10,
    backgroundColor: 'grey',
    marginHorizontal: 16,
  },
  texts: {
    fontWeight: '300',
    paddingHorizontal: 16,
  },
  lineContainer: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#000',
    marginVertical: 16,
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
    paddingVertical: 8,
  },
  mapStyle: {
    height: 200,
    width: '100%',
  },
});

export default CardDetail;
