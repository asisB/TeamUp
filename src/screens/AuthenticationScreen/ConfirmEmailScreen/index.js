import {View, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });
  const username = watch('username');

  const navigation = useNavigation();

  const onConfirmPressed = async data => {
    try {
      const response = await Auth.confirmSignUp(data.username, data.code);
      console.log('signup-confirmed', JSON.stringify(response));
      navigation.navigate('SignIn');
    } catch (e) {
      console.log('signup-confirmed: error', e);
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPressed = () => {
    console.warn('SignIn');
    navigation.navigate('SignIn');
  };

  const onResendPressed = async () => {
    try {
      const response = await Auth.resendSignUp(username);
      console.log(response);
      Alert.alert('Success', 'Code was already send to your email account!');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username code is required',
          }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'F4F4F4',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 16,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
