import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../src/components/Card'; 

const Profile = {
  name: 'John Doe',
  image: 'https://i.pinimg.com/564x/6b/5d/f2/6b5df2cbfdd8074930c227fae2843a1a.jpg',
  bio: 'A bio for testing purposes.',
};

test('Card component renders correctly', () => {
  const { getByText } = render(<Card user={Profile} />);

  const nameElement = getByText('John Doe');
  const bioElement = getByText('A bio for testing purposes.');

  expect(nameElement).toBeDefined();
  expect(bioElement).toBeDefined();
});


