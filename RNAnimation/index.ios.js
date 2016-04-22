/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var Opacity = require('./opacity');
var Rotate = require('./rotate');
var Time = require('./time');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class RNAnimation extends Component {
  render() {
    return (
      // <Opacity />
      // <Rotate />
      <Time />
    );
  }
}

AppRegistry.registerComponent('RNAnimation', () => RNAnimation);
