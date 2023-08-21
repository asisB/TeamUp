import {StyleSheet } from "react-native";

const style = StyleSheet.create({
    card: {
      width: "100%",
      height: '100%',
      borderRadius: 10,
      backgroundColor: '#fefefe',

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
  
      elevation: 6,
    },
    cardInner: {
      padding: 10
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      overflow: 'hidden',
  
      justifyContent: 'flex-end',
    },
    name: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    bio: {
      fontSize: 18, 
      color: 'white',
      lineHeight: 25,
    }
  })

  export default style;