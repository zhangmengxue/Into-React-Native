'use strict';

var React = require('react-native');
var DatePickerExample = require('./DatePickerExample');
var EmptyPage = require('./EmptyPage');
var NavigatorExample = require('./NavigatorExample');

var {
  AlertIOS,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  DatePickerIOS,
} = React;

var ExampleList = React.createClass({
  render: function() {
    var recurseTitle = 'Navigation Demo';
    if (!this.props.topExampleRoute) {
      recurseTitle += ' - more examples here';
    }
    return (
      <ScrollView style={styles.list}>
        <View style={styles.group}>
        {this._renderRow(recurseTitle, () => {
            this.props.navigator.push({
              title: 'example',
              component: NavigatorExample,
              backButtonTitle: 'Custom Back',
              passProps: {topExampleRoute: this.props.topExampleRoute || this.props.route},
            });
          })}
          {this._renderRow('DatePickerExample', () => {
            this.props.navigator.push({
              title: 'DatePickerExampleDemo',
              component: DatePickerExample,
            });
          })}
        </View>
        <View style={styles.line}/>
      </ScrollView>
    );
  },

  _renderRow: function(title: string, onPress: Function) {
    return (
      <View>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {title}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  list: {
    backgroundColor: '#eeeeee',
  },
  group: {
    backgroundColor: 'white',
  },
  groupSpace: {
    height: 15,
  },
  line: {
    backgroundColor: '#bbbbbb',
    height: 1 / PixelRatio.get(),
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#bbbbbb',
  },
  rowNote: {
    fontSize: 17,
  },
  rowText: {
    fontSize: 17,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


module.exports = ExampleList;
