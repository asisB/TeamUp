import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Amplify, Auth} from 'aws-amplify';
import awsExports from './src/aws-exports';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Chats from './src/screens/Chat/Chat';
import Navigation from './src/navigation/MainNavigation';
import MainNavigation from './src/navigation/MainNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import {Hub} from 'aws-amplify';
import {enableLatestRenderer} from 'react-native-maps';

Amplify.configure({
  ...awsExports,
  oauth: {
    ...awsExports.oauth,
  },
  DataStore: {
    authModeStrategyType: 'MULTI_AUTH',
  },
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
});

const Stack = createStackNavigator();
enableLatestRenderer();

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const checkUser = async () => {
    setLoading(true);
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  // Auth.signOut()
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.root}>
          {!isLoading && user && <MainNavigation />}
          {!isLoading && !user && <AuthNavigation />}
          {isLoading && <ActivityIndicator />}
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
});

export default App;
