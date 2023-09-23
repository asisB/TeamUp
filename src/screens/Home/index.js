import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Card from '../../components/Card';
import users from '../../../assets/data/user';
import { useNavigation } from '@react-navigation/native';
import AnimatedStack from '../../components/AnimatedStack';
import APIService from '../../apiservices/apiService';
import { Auth } from 'aws-amplify';
import AntDesign from 'react-native-vector-icons/AntDesign';
import uuid from 'react-native-uuid';


const HomeScreen = () => {
  const [userId, setUserId] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [matchupTeam, setMatchTeam] = useState([]);
  const navigation = useNavigation();

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const navigateToCardDetail = (user) => {
    navigation.navigate('CardDetail', { user });
  };

  const fetchData = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      const userId = authUser.attributes.sub;
      setUserId(userId);

      const allUsersRes = await APIService.getAllUser();

      const connectedUserRes = await APIService.getConnectedUser(userId);

      const connectedUserIDs = connectedUserRes.map(user => user.receiverID);

      const filteredUsers = allUsersRes
        .filter(item => item.id !== userId)
        .filter(user => connectedUserIDs.includes(user.id) === false);

      setMatchTeam(filteredUsers);

    } catch (error) {
      console.log(`fetch-data:`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  HomeScreen.options = {
    headerShown: false,
    headerTitle: null,
    headerStyle: {
      elevation: 0,
      borderBottomWidth: 0,
    },
  };

  const onLikePress = async item => {
    console.log(`called: true`);
    try {
      const input = {
        id: uuid.v4(),
        userID: userId,
        receiverID: item.id,
        senderID: userId,
        status: 'REQUESTED',
      };
      const res = await APIService.createConnection(input);
      if (res) {
        fetchData();
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          clearButtonMode="always"
          style={styles.searchBar}
          autoCapitalize="none"
          autoCorrect="false"
          value={searchQuery}
          onChangeText={query => handleSearch(query)}
        />
      </View>
      <FlatList
        data={matchupTeam}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToCardDetail(item)}>
            <View style={styles.cardContainer}>
              <Card user={item} />
              <TouchableOpacity
                style={styles.connectIcon}
                onPress={() => onLikePress(item)}>
                <AntDesign name="like1" size={32} color="#ffff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cardList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
  searchContainer: {
    width: '100%',
    paddingVertical: 8,
  },
  searchBar: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderColor: '#ffebd5',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#ffebd5',
  },
  cardContainer: {
    marginBottom: 16,
  },
  cardList: {
    paddingVertical: 8,
  },
  connectIcon: {
    position: 'absolute',
    end: 24,
    top: 24,
  },
});

export default HomeScreen;
