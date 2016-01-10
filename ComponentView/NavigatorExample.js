'use strict';

var React = require('react-native');
var DatePickerExample = require('./DatePickerExample');
var EmptyPage = require('./EmptyPage');

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

var NavigatorExample = React.createClass({
  render: function() {
    var recurseTitle = 'Navigation Demo';
    if (!this.props.topExampleRoute) {
      recurseTitle += ' - more examples here';
    }
    return (
      <ScrollView style={styles.list}>
        <View style={styles.group}>
          {this._renderRow('Custom Right Button', () => {
            this.props.navigator.push({
              title: 'Example',
              component: DatePickerExample,
              rightButtonTitle: 'Cancel',
              onRightButtonPress: () => this.props.navigator.pop(),
              passProps: {
                text: 'This page has a right button in the nav bar',
              }
            });
          })}
          {this._renderRow('Custom Left & Right Icons', () => {
            this.props.navigator.push({
              title: 'Example',
              component: DatePickerExample,
              leftButtonTitle: 'Custom Left',
              onLeftButtonPress: () => this.props.navigator.pop(),
              rightButtonTitle: 'Custom Right',
              onRightButtonPress: () => {
                AlertIOS.alert(
                  'Bar Button Action',
                  'Recognized a tap on the bar button icon',
                  [
                    {
                      text: 'OK',
                      onPress: () => console.log('Tapped OK'),
                    },
                  ]
                );
              },
              passProps: {
                text: 'This page has an icon for the right button in the nav bar',
              }
            });
          })}
          {this._renderRow('Pop', () => {
            this.props.navigator.pop();
          })}
          {this._renderRow('Pop to top', () => {
            this.props.navigator.popToTop();
          })}
          {this._renderReplacePrevious()}
          {this._renderReplacePreviousAndPop()}
        </View>
      </ScrollView>
    );
  },

  _renderReplacePrevious: function() {
    if (!this.props.topExampleRoute) {
      // this is to avoid replacing the UIExplorerList at the top of the stack
      return null;
    }
    return this._renderRow('Replace previous', () => {
      this.props.navigator.replacePrevious({
        title: 'Replaced',
        component: EmptyPage,
        passProps: {
          text: 'This is a replaced "previous" page',
        },
        wrapperStyle: styles.customWrapperStyle,
      });
    });
  },

  _renderReplacePreviousAndPop: function() {
    if (!this.props.topExampleRoute) {
      // this is to avoid replacing the UIExplorerList at the top of the stack
      return null;
    }
    return this._renderRow('Replace previous and pop', () => {
      this.props.navigator.replacePreviousAndPop({
        title: 'Replaced and Popped',
        component: EmptyPage,
        passProps: {
          text: 'This is a replaced "previous" page',
        },
        wrapperStyle: styles.customWrapperStyle,
      });
    });
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
      </View>
    );
  },
});

var styles = StyleSheet.create({
  customWrapperStyle: {
    backgroundColor: '#bbdddd',
  },
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


module.exports = NavigatorExample;
