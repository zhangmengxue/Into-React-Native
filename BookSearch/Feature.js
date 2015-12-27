'use strict';

var React = require('react-native');
var BookList = require('./BookList');

var {
  StyleSheet,
   View,
   Text,
   Component,
   NavigatorIOS
} = React;

var styles = StyleSheet.create({
  container:{
    flex:1
  }
});

class Feature extends Component {
  render(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title:'Feature Books',
          component: BookList
        }}/>
    );
  }
}

module.exports = Feature;
