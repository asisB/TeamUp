import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "3571572",
    "title": "Multi-lateral intermediate moratorium",
    "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    "image": "https://image.flaticon.com/icons/png/256/3571/3571572.png"
  },
  {
    "key": "3571747",
    "title": "Automated radical data-warehouse",
    "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    "image": "https://image.flaticon.com/icons/png/256/3571/3571747.png"
  },
  {
    "key": "3571680",
    "title": "Inverse attitude-oriented system engine",
    "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    "image": "https://image.flaticon.com/icons/png/256/3571/3571680.png"
  },
  {
    "key": "3571603",
    "title": "Monitored global data-warehouse",
    "description": "We need to program the open-source IB interface!",
    "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
  }
]

const OnboardingScreen = () =>  {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* <Animated.FlatList data={DATA}
      keyExtractor={item => item.key}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
          return <view style={{width, justifyContent: 'center', alignItems: 'center'}}>
              <Image 
              source={{uri: item.image}} 
              style={{
                  width: width /2, 
                  height: width /2, 
                  resizeMode: 'contain', }}/>
          </view>
      }}

      /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnboardingScreen;
