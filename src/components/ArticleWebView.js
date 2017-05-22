import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class ArticleWebView extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <WebView
        source={{uri: this.props.url}}
        style={{marginTop: 62}}
      />
    );
  }

}