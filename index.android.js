/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoopAnimation from './app/LoopAnimation.js'

export default class Loop extends Component {
  render() {
    //you can also use, like source={imgSource}
    const imgSource={uri:'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg',width:700,height:306};

    return (
      <View style={{flex:1}}>
        {/*this is the background animation */}
        <LoopAnimation source={require('./img/back.jpg')} duration={10000} />
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/*Content goes here*/}
          <View style={{width: 200, height: 400, backgroundColor: 'powderblue'}} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Loop', () => Loop);
