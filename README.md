# react-native-LoopAnimation

react-native component that let you loop an image in the background

## Example
![](http://i.giphy.com/l3vR0DqJCLPpEa9r2.gif)


## Installation
```sh
npm i react-native-LoopAnimation
```

## Example 
```js
import LoopAnimation from './app/LoopAnimation.js'
...
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
```


## Props
|Prop		|Description							 |Default					|
|-----------|----------------------------------------|--------------------------|
|`source`	|This is the source of the image		 |<img src="https://i.kinja-img.com/gawker-media/image/upload/s--ZI7xve4h--/c_scale,fl_progressive,q_80,w_800/ceukprxttxixxluji8tj.jpg" width="100">	  |
|`duration`	|time to pass the first image 			 | 10000ms					|
|`style`	|styles you want to add to Animated.image| height: Window.height	|
