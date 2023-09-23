import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import APIService from '../../apiservices/apiService';
import { Auth } from 'aws-amplify';
import Favorite from '../../components/Favorite';
import { useNavigation } from '@react-navigation/native';

const FavoriteScreen = () => {
    const [userId, setUserId] = useState();
    const navigation = useNavigation();
    const [favoriteUsers, setFavoriteUsers] = useState([]);

    const navigateToCardDetail = (user) => {
        navigation.navigate('CardDetail', { user });
    };

    const addToFavorite = (userId, isAdded) => {
        if (!isAdded) {
            setFavoriteUsers((users) => [...users, userId]);

        }else {
            setFavoriteUsers((users) => users.filter((id) => id !== userId));
        }
    }

    const getBookmarkUsers = async (userId) => {
        try {
            const favoriteUsers = await APIService.getFavoriteUsers(userId);
            return favoriteUsers;
        } catch (error) {
            console.log(`Error getting favorite users: ${error}`);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authUser = await Auth.currentAuthenticatedUser();
                const userId = authUser.attributes.sub;
                setUserId(userId);
                const favoriteUsers = await getFavoriteUsers(userId);
                setFavoriteUsers(favoriteUsers);
            } catch (error) {
                console.log(`fetch-data:`, error);
            }
        };

        fetchData();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigateToCardDetail(item)}>
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
                data={favoriteUsers}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.cardList}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default FavoriteScreen;
