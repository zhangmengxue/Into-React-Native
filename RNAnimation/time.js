'use strict';

import React, {
  Animated,
  Easing,
  View,
  Component,
  StyleSheet,
  Text
} from 'react-native';

class Time extends Component {
  constructor(){
    super();
    this.state = {
      anim: [1,2,3].map(() => new Animated.Value(0)) // 初始化3个值
    };
  }
  componentDidMount(){
    var timing = Animated.timing;
    // sequence接受一组动画参数，依次执行
    Animated.sequence([
      // 带有延迟时间的动画执行队列
      Animated.stagger(200, this.state.anim.map(left => {
        return timing(left, {
            toValue: 1,
          });
        }).concat(
          this.state.anim.map(left => {
              return timing(left, {
                  toValue: 0,
              });
          })
      )), // 三个view滚到右边再还原，每个动作间隔200ms
      Animated.delay(400), // 延迟400ms，配合sequence使用
      timing(this.state.anim[0], {
          toValue: 1
      }),
      timing(this.state.anim[1], {
          toValue: -1
      }),
      timing(this.state.anim[2], {
          toValue: 0.5
      }),
      Animated.delay(400),
      Animated.parallel(this.state.anim.map((anim) => timing(anim, {
          toValue: 0
      }))) // 同时回到原位置
    ]
    ).start();
  }
  render(){
    var views = this.state.anim.map(function(value, i) {
      return (
        <Animated.View
          key={i}
          style={[styles.demo, styles['demo' + i], {
              left: value.interpolate({
                  inputRange: [0,1],
                  outputRange: [0,200]
              })
          }]}>
          <Text style={styles.text}>我是第{i + 1}个View</Text>
        </Animated.View>
      );
    });
    return <View style={styles.container}>
               <Text>sequence/delay/stagger/parallel演示</Text>
               {views}
           </View>;
  }
}

var styles = StyleSheet.create({
  demo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  demo0: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  demo1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  demo2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  text: {
    fontSize: 30
  }
});


module.exports = Time;



