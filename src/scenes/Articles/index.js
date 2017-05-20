import React, { Component } from 'react';
import { View, Text, ListView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Article from './Article';
import * as actions from '../../actions';

class Articles extends Component {

  constructor(props) {
    super(props);
    // props.test('もぎえいごろうｗｗｗｗ');
    props.getArticles();
  }

  _keyExtractor = (item, index) => item.id;

  render () {
    return (
      <View style={{flex: 1, paddingTop: 62}}>
        <FlatList
          data={this.props.articles.toJS()}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Article data={item} />}
          ItemSeparatorComponent={(sectionId, rowId) => <View key={rowId} style={{ flex: 1, height: 0.5, backgroundColor: "#000" }}/>}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {articles: state.articles};
};

export default connect(mapStateToProps, actions)(Articles);