import React, { useState, useEffect } from "react";
import 'react-native-gesture-handler';
import { View, StyleSheet } from "react-native";
import Card from "../../../src/components/Card";
import user from "../../../assets/data/user";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedStack from "../../../src/components/AnimatedStack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

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
          renderItem={({ item }) => <Card user={item} />}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
        />
        <View style={styles.icons}>
          <View style={styles.buttons}> 
          <FontAwesome name="undo" size={24} color="#FBD88B" />
          </View>
          <View style={styles.buttons}> 
          <Entypo name="cross" size={24} color="#F76C6B" />
          </View>
          <View style={styles.buttons}> 
          <FontAwesome name="star" size={24} color="#3AB4CC" />
          </View>
          <View style={styles.buttons}> 
          <FontAwesome name="heart" size={24} color="#4FCC94" />
          </View>
          <View style={styles.buttons}> 
          <Ionicons name="flash" size={24} color="#A65CD2" />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: '100%', 
    backgroundColor: '#ededed'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,

  },
  buttons: {
    width: 50, 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  }
});

export default HomeScreen;
