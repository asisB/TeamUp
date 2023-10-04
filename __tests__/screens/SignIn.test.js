import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInScreen from '../../src/screens/AuthenticationScreen/SignInScreen';

// Import necessary modules for navigation mocking
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const mockNavigation = {
  navigate: jest.fn(),
};

import { Auth } from 'aws-amplify';
jest.mock('aws-amplify', () => ({
  Auth: {
    signIn: jest.fn(),
    currentAuthenticatedUser: jest.fn().mockResolvedValue({
      attributes: {
        sub: 'dummyUserId',
        name: 'Dummy User',
        email: 'dummy@example.com',
      },
    }),
  },
}));

jest.mock('@aws-amplify/api', () => ({
  graphqlOperation: jest.fn(),
}));

describe('SignInScreen Component', () => {
  it('renders the SignInScreen correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            initialParams={{}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

    expect(getByText('SignIn')).toBeTruthy();
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('password')).toBeTruthy();
    expect(getByText("Don't have an account? Create One")).toBeTruthy();
  });
});
