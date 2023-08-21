import React, { useState, useEffect } from "react";
import 'react-native-gesture-handler';
import {View, StyleSheet } from "react-native";
import Card from "../../../src/components/Card";
import user from "../../../assets/data/user";
import {GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedStack from "../../../src/components/AnimatedStack";

const HomeScreen = () => {

  const onSwipeLeft = () => {
    console.warn('swipe left: ', user.name);
  }

  const onSwipeRight = () => {
    console.warn('swipe left: ', user.name);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
      <AnimatedStack
        data={user}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: '100%'
  },
});

export default HomeScreen;
