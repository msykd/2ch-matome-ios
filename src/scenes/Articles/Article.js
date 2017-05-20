import React, { Component } from 'react';
import { View, Text, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Article extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  openArticle() {
    Actions.WebView(this.props.data);
  }

  render () {
    return (
        <TouchableOpacity
          onPress={this.openArticle.bind(this)}
        >
          <View style={styles.wrapper}>
          <Text>{this.props.data.title}</Text>
          </View>
        </TouchableOpacity>
    );
  }

}

const styles = {
  wrapper: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};