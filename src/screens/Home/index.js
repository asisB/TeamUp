import React from "react";
import 'react-native-gesture-handler';
import { View, StyleSheet } from "react-native";
import Card from "../../../src/components/Card";
import user from "../../../assets/data/user";
import AnimatedStack from "../../components/AnimatedStack";
import NavigationBar from "../../components/NavigationBar";


const HomeScreen = () => {

  const onSwipeLeft = () => {
    console.warn('swipe left: ', user.name);
  }

  const onSwipeRight = () => {
    console.warn('swipe left: ', user.name);
  }


  return (
    <View style={styles.container}>
      <AnimatedStack
        data={user}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <NavigationBar />
    </View>

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
