import React, { useState } from "react";
import 'react-native-gesture-handler';
import { View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import { Amplify, Auth } from 'aws-amplify';
import awsExports from './src/aws-exports';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from "./src/navigation";
import TabOneScreen from "./src/screens/Chat/TabOneScreen";


Amplify.configure(awsExports);
const Stack = createStackNavigator();

const App = () => {
 // Auth.signOut()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.root}>
      <TabOneScreen />
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10

  }
});

export default App;
