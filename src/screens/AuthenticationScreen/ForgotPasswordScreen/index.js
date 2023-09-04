import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSendPressed = async (data) => {
    try {
      const response = await Auth.forgotPassword(data.username);
      console.log(response);
      navigation.navigate('NewPassword');
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
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

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


export default ForgotPasswordScreen;

