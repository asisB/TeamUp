import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  AppState,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import APIService from '../../apiservices/apiService';
import {Auth} from 'aws-amplify';
import Favorite from '../../components/Favorite';
import {useNavigation} from '@react-navigation/native';

const FavoriteScreen = () => {
  const [userId, setUserId] = useState();
  const navigation = useNavigation();
  const [bookmarks, setBookmarks] = useState([]);
  const [currentUserID, setCurrentUserID] = useState();

  const navigateToCardDetail = user => {
    navigation.navigate('CardDetail', {user});
  };

  const addToFavorite = (userId, isAdded) => {
    if (!isAdded) {
      setFavoriteUsers(users => [...users, userId]);
    } else {
      setFavoriteUsers(users => users.filter(id => id !== userId));
    }
  };

  const getBookmarkUsers = async userId => {
    try {
      const favoriteUsers = await APIService.getFavoriteUsers(userId);
      return favoriteUsers;
    } catch (error) {
      console.log(`Error getting favorite users: ${error}`);
      return [];
    }
  };

  const fetchData = async () => {
    try {
      // Current user information
      const authUser = await Auth.currentAuthenticatedUser();
      const userId = authUser.attributes.sub;
      setCurrentUserID(userId);

      const bookmarkedUsers = await APIService.getBookmarkUsers(userId);
      setBookmarks(bookmarkedUsers);
      console.log(`bookmarks`, JSON.stringify(bookmarkedUsers, null, 2));
    } catch (error) {
      console.log(`fetch-data:`, error);
    }
  };

  useEffect(() => {
    fetchData();
    navigation.addListener('focus', () => {
      console.log(`got focus`);
      fetchData();
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigateToCardDetail(item.markedUser)}>
        <View style={styles.cardContainer}>
          <Favorite user={item} />
        </View>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    cardContainer: {
      marginBottom: 16,
    },
    cardList: {
      paddingVertical: 8,
    },
  });

  return (
    <SafeAreaView>
      <FlatList
        data={bookmarks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cardList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FavoriteScreen;
