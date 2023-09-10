import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/AuthenticationScreen/SignInScreen';
import SignUpScreen from '../screens/AuthenticationScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/AuthenticationScreen/ForgotPasswordScreen';
import ConfirmEmailScreen from '../screens/AuthenticationScreen/ConfirmEmailScreen';
import NewPasswordScreen from '../screens/AuthenticationScreen/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthNavigation;
