import React from 'react';
import renderer from 'react-test-renderer';
import ChatRoomItem from '../../src/components/Chat/ChatRoomItem';  

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }), 
}));

const chatRoom = {
  id: '1',
  users: [
    {
      name: 'John Doe',
      imageUri: 'https://example.com/john.jpg',
    },

  ],
  newMessages: 3,
  lastMessage: {
    content: 'Hello, how are you?',
    createdAt: '2023-09-21T12:00:00Z',
  },
};

test('ChatRoomItem component renders correctly', () => {
  const tree = renderer.create(<ChatRoomItem chatRoom={chatRoom} />).toJSON();

  expect(tree).toMatchSnapshot();
});
