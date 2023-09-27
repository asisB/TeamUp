import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MessageInput from '../../src/components/MessageInput';

describe('MessageInput component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<MessageInput />);
    const inputElement = getByPlaceholderText('Send a message....');
    expect(inputElement).toBeTruthy();
  });

  it('updates message state on input change', () => {
    const { getByPlaceholderText } = render(<MessageInput />);
    const inputElement = getByPlaceholderText('Send a message....');
    
    fireEvent.changeText(inputElement, 'Test message');
    expect(inputElement.props.value).toBe('Test message');
  });
});
