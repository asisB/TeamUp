import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../../screens/ProfileScreen';
import HomeScreen from '../../screens/Home';
import MatchesScreen from '../../screens/MachesScreen';
import ChatRoomScreen from '../../screens/Chat/ChatRoomScreen';
import Chats from '../../screens/Chat/Chat';

const NavigationBar = () => {
  const [activeScreen, setActiveScreen] = useState('HOME')

  const color = '#b5b5b5';
  const activeColor = '#FCBF49';
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        {/* Screens */}
        <View style={styles.screenContainer}>
          {activeScreen === 'HOME' && <HomeScreen />}
          {activeScreen === 'CHAT' && <Chats />}
          {activeScreen === 'PROFILE' && <ProfileScreen />}
          {activeScreen === 'FAVORITE' && <MatchesScreen/>}
        </View>
        
        <View style={styles.bottomNavigation}>
          <Pressable onPress={() => setActiveScreen('HOME')}>
            <Fontisto 
              name="home" 
              size={30} 
              color={activeScreen === 'HOME' ? activeColor : color} />
          </Pressable>
          <Pressable onPress={() => setActiveScreen('FAVORITE')}>
            <Fontisto name='favorite' size={30} color={activeScreen === 'FAVORITE' ? activeColor : color} />
          </Pressable>
          <Pressable onPress={() => setActiveScreen('CHAT')}>
            <Ionicons name='chatbubble-sharp' size={30} color={activeScreen === 'CHAT' ? activeColor : color} />
          </Pressable>
          <Pressable onPress={() => setActiveScreen('PROFILE')}>
            <FontAwesome name='user' size={30} color={activeScreen === 'PROFILE' ? activeColor : color} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1, // Takes the remaining space
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: 'white'
  }
});

export default NavigationBar;
