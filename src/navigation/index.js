import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/AuthenticationScreen/SignInScreen';
import SignUpScreen from '../screens/AuthenticationScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/AuthenticationScreen/ForgotPasswordScreen';
import ConfirmEmailScreen from '../screens/AuthenticationScreen/ConfirmEmailScreen';
import NewPasswordScreen from '../screens/AuthenticationScreen/NewPasswordScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import MatchesScreen from '../screens/MachesScreen';
import HomeScreen from '../screens/Home';
import { Auth, Hub } from 'aws-amplify';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      console.log('Auth event:', data.payload.event);
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
