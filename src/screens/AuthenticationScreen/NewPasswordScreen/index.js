import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify'

const NewPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSubmitPressed = async (data) => {
    try {
      const response = await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      console.log(response);
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  }

  const onSignInPressed = () => {
    console.warn('SignIn');
    navigation.navigate('SignIn')

  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{ required: 'Username is required' }}
        />

        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{ required: 'Code is required' }}
        />

        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

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
  }
})


export default NewPasswordScreen;

