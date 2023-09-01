import React, {useState} from "react";
import 'react-native-gesture-handler';
import { View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import HomeScreen from "./src/screens/Home";
import MachesScreen from "./src/screens/MachesScreen";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import ProfileScreen from "./src/screens/ProfileScreen";
import { NavigationContainer } from '@react-navigation/native';

Amplify.configure(awsExports);


const App = () => {

const [activeScreen, setActiveScreen] = useState('HOME')

  const color = '#b5b5b5';
  const activeColor = '#FCBF49'
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topNavigation}>
          <Pressable onPress={() => setActiveScreen('HOME')}>
            <Fontisto name="home" size={30} color={activeScreen === 'HOME' ? activeColor : color} />
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
       { activeScreen === 'HOME' && <HomeScreen />}
       
       { activeScreen === 'CHAT' && <MachesScreen />}

       { activeScreen === 'PROFILE' && <ProfileScreen />}
      </View>
    </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10

  }
});

export default withAuthenticator(App);
