var React = require('react-native');

var {
  View,
  Easing,
  TouchableOpacity,
  Text,
  Component,
  } = React;

var FlipView = require('react-native-flip-view').default;

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  render = () => {
    return (
      <FlipView style={{flex: 1}}
              front={this._renderFront()}
              back={this._renderBack()}
              isFlipped={this.state.isFlipped}
              onFlipped={(val) => {console.log('Flipped: ' + val);}}
              flipAxis="y"
              flipEasing={Easing.out(Easing.ease)}
              flipDuration={500}
              perspective={1000}/>
    );
  };

  _renderFront = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#81D4FA', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'black', padding: 20}} onPress={this._flip}>
          <Text style={{fontSize: 32, color: 'white'}}>Flip to Back!</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderBack = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#1565C0', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'black', padding: 20}} onPress={this._flip}>
          <Text style={{fontSize: 32, color: 'white'}}>Flip to Front!</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _flip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  };
}

module.exports = Demo;
