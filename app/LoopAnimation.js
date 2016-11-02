import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,//get size of the device
  Animated,
  Easing
} from 'react-native';
import InViewPort from 'react-native-inviewport';

const Window = Dimensions.get('window');
const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: 'row',
        position: 'absolute'
    }
});

class LoopAnimation extends Component{

    static propTypes={
    };


    static defaultProps={
        source: {uri:'https://i.kinja-img.com/gawker-media/image/upload/s--ZI7xve4h--/c_scale,fl_progressive,q_80,w_800/ceukprxttxixxluji8tj.jpg',width: 600,height: 400},
        duration: 10000,
        style:{height: Window.height}
    };


    constructor(props){
        super(props);

        this.state={
            move_1: new Animated.Value(0),
            move_2: new Animated.Value(0),
            width: 0,
        };
    }

    firstAnimation(){
        Animated.sequence([
            Animated.timing(this.state.move_2,{
                toValue: 0,
                duration: 0,
            }),
            Animated.parallel([
                Animated.timing(this.state.move_1,{
                    //toValue: -450,
                    toValue: -this.state.width,
                    duration: this.props.duration,
                    easing: Easing.linear,
                }),
                Animated.timing(this.state.move_2,{
                    //toValue: -450,
                    toValue: -this.state.width,
                    duration: this.props.duration,
                    easing: Easing.linear,
                }),
            ])
        ]).start(() => {
            this.secondAnimation();
        });
    }
    secondAnimation(){
        Animated.sequence([
            Animated.timing(this.state.move_1,{
                //toValue:450,
                toValue: this.state.width,
                duration:0,
            }),
            Animated.parallel([
                Animated.timing(this.state.move_2,{
                    //toValue:-900,
                    toValue: -2*this.state.width,
                    duration: this.props.duration,
                    easing: Easing.linear,
                }),
                Animated.timing(this.state.move_1,{
                    toValue:0,
                    duration: this.props.duration,
                    easing: Easing.linear,
                })
            ])
        ]).start(() => {
            this.firstAnimation();
        });
    }
    getWidth(e){
        var ImageWidth = e.nativeEvent.layout.width;
        this.setState({width: ImageWidth});
    }


    
    checkVisibility(){

    }
    render(){
        const slidingAnimation_1 = this.state.move_1;
        const slidingAnimation_2 = this.state.move_2;
        return(
            <View style={styles.main}>
                <Animated.Image onLayout={this.getWidth.bind(this)} onLoadEnd={()=>{this.firstAnimation()}} source={this.props.source} style={[this.props.style, {transform: [{translateX: slidingAnimation_1}]} ]}/>
                <Animated.Image source={this.props.source} style={[this.props.style, {transform: [{translateX: slidingAnimation_2},{scaleX:-1}]}]}/>
            </View>
        );
    };

};

module.exports = LoopAnimation;