import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import users from '../../../assets/data/user';
import { useNavigation } from '@react-navigation/native';
import AnimatedStack from '../../components/AnimatedStack';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe right: ', user.name);
  };

  const navigateToCardDetail = () => {
    navigation.navigate('CardDetail', { showHeader: false });
  };

  HomeScreen.options = {
    headerShown: false,
    headerTitle: null,
    headerStyle: {
      elevation: 0,
      borderBottomWidth: 0,
    },
  };
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Search'
          clearButtonMode='always'
          style={styles.searchBar}
          autoCapitalize="none"
          autoCorrect="false"
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
        />
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={navigateToCardDetail}>
            <View style={styles.cardContainer}>
              <Card user={item} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cardList}
        showsVerticalScrollIndicator={false}
      />

      {/* <AnimatedStack
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      /> */}

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
    backgroundColor: '#ffebd5'
  },
  cardContainer: {
    marginBottom: 16,
  },
  cardList: {
    paddingVertical: 8,
  },
});


export default HomeScreen;