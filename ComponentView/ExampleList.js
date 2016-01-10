'use strict';

var React = require('react-native');
var DatePickerExample = require('./DatePickerExample');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DatePickerIOS,
} = React;


var ExampleList = React.createClass({
  renderDate: function(){
    // this.props.navigator.push({
    //   title: DatePickerExample.title,
    //   component: DatePickerExample,
    // });
  },
  render: function(){
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight onPress={this.renderDate()}>
          <View style={styles.itemWrapper}>
           <Text>DatePicker Demo</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    marginTop: 60,
    flexDirection: 'column',
  },
  itemWrapper: {
    height: 70,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datepicker: {
    flex: 1,
  },
});

module.exports = ExampleList;
