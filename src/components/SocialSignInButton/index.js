import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'


const facebookPressed = () => {
    console.warn('facebook');
}
const googlePressed = () => {
    console.warn('google');
}
const applePressed = () => {
    console.warn('apple');
}

const SocialSignInButton = () => {
    return (
        <>
            <CustomButton text='Facebook' onPress={facebookPressed} bgColor="#E7EAF4" fbColor="#4765A9" />
            <CustomButton text='Google' onPress={googlePressed} bgColor="#FAE9EA" fbColor="#DD4D44" />
            <CustomButton text='Apple' onPress={applePressed} bgColor="#e3e3e3" fbColor="#363636" />
        </>
    )
}

export default SocialSignInButton;