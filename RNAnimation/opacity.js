'use strict';

import React, {
  Animated,
  Easing,
  View,
  Component,
  StyleSheet,
  Text
} from 'react-native';

class Opacity extends Component {
  // es6 写法 注意这里与getInitialState的区别
  constructor(){
    super();
    this.state = {
      fadeInOpacity: new Animated.Value(0) // 初始值
    };
  }
  componentDidMount(){
    // 设定动画属性和参数 并start
    Animated.timing(this.state.fadeInOpacity, {
        toValue: 1, // 目标值
        duration: 2500, // 动画时间
        easing: Easing.linear // 缓动函数
    }).start();
  }
  render(){
    return (
      <Animated.View style={[styles.demo, {
            opacity: this.state.fadeInOpacity
          }]}>
        <Animated.Text style={styles.text}>悄悄的，我出现了</Animated.Text>
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

module.exports = Opacity;
