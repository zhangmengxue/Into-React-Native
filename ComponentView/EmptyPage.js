'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Image,
  Text,
  Component,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;


var EmptyPage = React.createClass({
  render: function(){
    return (
      <View>
        <Text>I am empty!</Text>
      </View>
    );
  }
});

module.exports = EmptyPage;
