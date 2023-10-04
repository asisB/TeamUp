import React from 'react';
import { render } from '@testing-library/react-native';
import Favorite from '../../src/components/Favorite'; 

test('should render the correct name, skill, and bio', async () => {
    const user = {
        markedUser: {
            name: 'John Doe',
            skill: 'Software Engineer',
            bio: 'I am a software engineer with 5 years of experience.'
        }
    };

    const { findByText } = render(<Favorite user={user} />);

    const name = await findByText('John Doe');
    const skill = await findByText('Software Engineer');
    const bio = await findByText('I am a software engine...');

    expect(name).toBeTruthy();
    expect(skill).toBeTruthy();
    expect(bio).toBeTruthy();
});


test('should render the image correctly', () => {
    const user = {
        markedUser: {
            name: 'John Doe',
            skill: 'Software Engineer',
            bio: 'I am a software engineer with 5 years of experience.',
            image: 'https://example.com/image.jpg'
        }
    };

    const { getByTestId } = render(<Favorite user={user} />);

    const image = getByTestId('user-image');

    expect(image.props.source.uri).toBe('https://example.com/image.jpg');
});
