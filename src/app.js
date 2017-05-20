import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Scene, Router } from 'react-native-router-flux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducers from './reducers';
import Articles from './scenes/Articles';

const saga = createSagaMiddleware();

const RouterWithRedux = connect()(Router);
const middleware = [logger, saga];
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

saga.run(rootSaga);

class App extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="Root">
            <Scene key="Articles" component={Articles} title="記事一覧" />
            <Scene key="WebView" component={ArticleWebView} title="記事詳細" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
};


class ArticleWebView extends Component {

  constructor(props) {
    super(props);
    console.log(props);
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

export default App;