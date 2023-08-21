import React from "react";
import { Text, ImageBackground, View } from 'react-native'
import style from "./style";

const Card = (props) => {
    const {name, image, bio} = props.user;
    return (
        <View style={style.card}>
        <ImageBackground source={{ uri: image}}
          style={style.image}>
            <View style={style.cardInner}>
            <Text style={style.name}>{name}</Text>
            <Text style={style.bio}>{bio}</Text>
            </View>
          </ImageBackground>
      </View>
    )
}

export default Card;