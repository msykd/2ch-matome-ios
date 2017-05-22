import React, { Component } from 'react';
import { View, Text, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Article extends Component {

  constructor(props) {
    super(props);
  }

  openArticle() {
    Actions.WebView(this.props.data);
  }

  render () {

    const title = this.props.data.title.substr(0, 40);

    return (
        <TouchableOpacity
          onPress={this.openArticle.bind(this)}
        >
          <View style={styles.wrapper}>
            <Text style={{ fontSize: 12, marginBottom: 5, color: '#CCC'}}>{this.props.data.date}</Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold'}}>{title}</Text>
          </View>
        </TouchableOpacity>
    );
  }

}

const styles = {
  wrapper: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 80
  }
};