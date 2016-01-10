/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var ExampleList = require('./ExampleList');
var DatePickerExample = require('./DatePickerExample.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DatePickerIOS,
  NavigatorIOS
} = React;

var ComponentView = React.createClass({
  render: function() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          title:'Example List',
          component: ExampleList
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
  }
});

AppRegistry.registerComponent('ComponentView', () => ComponentView);
