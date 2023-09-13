import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../../../assets/images/logo.png'
import { useWindowDimensions } from 'react-native'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import SocialSignInButton from '../../../components/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify'

const SignInScreen = () => {

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSignInPressed = async (data) => {
        if (loading){
            return;
        }
        setLoading(true);
        try {
            const response = await Auth.signIn(data.username, data.password);
            console.log(response);
            
        } catch (error) {
            Alert.alert("Oops", error.message);
        }
        setLoading(false);

    }

    const onForgotPasswordPressed = () => {
        console.warn('password');
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPressed = () => {
        console.warn('signUp');
        navigation.navigate('SignUp')
    }

    return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMethod="auto" />
                    <CustomInput name="username" placeholder='Username' control={control} rules={{ required: 'username is required' }} />
                    <CustomInput name="password" placeholder='password' control={control} rules={{ required: 'Password is required', minLength: { value: 3, message: 'Password should be minimum 6 character long' } }} secureTextEntry />

                    <CustomButton text={loading ? "loading..." : "SignIn"} onPress={handleSubmit(onSignInPressed)} />
                    <CustomButton text='Forgot Password' onPress={onForgotPasswordPressed} type="TERTIARY" />

                    <SocialSignInButton />

                    <CustomButton text="Don't have an account? Create One" onPress={onSignUpPressed} type="TERTIARY" />

                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'FFFFFF',
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 200,
    }
})


export default SignInScreen;

