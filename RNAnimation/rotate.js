'use strict';

import React, {
  Animated,
  Easing,
  View,
  Component,
  StyleSheet,
  Text
} from 'react-native';

class Rotate extends Component {
  constructor(){
    super();
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      rotation: new Animated.Value(0),
      fontSize: new Animated.Value(0)
    }
  }
  componentDidMount(){
    var timing = Animated.timing;
    // parallel 实现多个动画属性的并行渲染 相似的还有 [sequence,stagger,delay]
    Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
            return timing(this.state[property], {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
        });
    })).start();
  }
  render(){
    return (
      <Animated.View style={[styles.demo, {
        opacity: this.state.fadeInOpacity,
          transform: [{
             // 插值函数（数值大小到单位的映射转换）
              rotateZ: this.state.rotation.interpolate({
                  inputRange: [0,1],
                  outputRange: ['0deg', '360deg']
              })
          }]
        }]}>
        <Animated.Text style={{
          fontSize: this.state.fontSize.interpolate({
              inputRange: [0,1],
              outputRange: [12,26]
          })
        }}>
          我骑着七彩祥云出现了😈💨
        </Animated.Text>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  demo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 30
  }
});

module.exports = Rotate;
