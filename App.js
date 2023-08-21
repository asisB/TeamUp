import React from "react";
import 'react-native-gesture-handler';
import {View, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/Home";
import MachesScreen from "./src/screens/MachesScreen";

const App = () => {
  return (
      <View style={styles.container}>
       <HomeScreen/>
      </View>
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

export default App;
