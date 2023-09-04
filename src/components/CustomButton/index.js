import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fbColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        pressed ? styles.containerPressed : {}, // Add a pressed style
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fbColor ? { color: fbColor } : {},
        ]}
      >
        {text}{' '}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    marginVertical: 6,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#D62828',
  },
  container_TERTIARY: {},
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  containerPressed: {
    opacity: 0.5, // Adjust the opacity when pressed
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'gray',
  },
  text_SECONDARY: {
    color: 'red',
  },
});

export default CustomButton;
