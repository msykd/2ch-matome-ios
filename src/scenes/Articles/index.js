import React, { Component } from 'react';
import { View, Text, ListView, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Article from './Article';
import * as actions from '../../actions';

class Articles extends Component {

  constructor(props) {
    super(props);
    props.getArticles();
  }

  _keyExtractor = (item, index) => item.id;

  _onRefresh() {
    this.props.getArticles();
  }

  render () {
    return (
      <View style={{flex: 1, paddingTop: 62}}>
        <FlatList
          data={this.props.articles}
          keyExtractor={this._keyExtractor}
          renderItem={({item, index}) => <Article data={item} index={index} />}
          ItemSeparatorComponent={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          refreshControl={
            <RefreshControl
              refreshing={this.props.isLoading}
              onRefresh={this._onRefresh.bind(this)}
              title={'Now loading...'}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#BBB'
  }
});

const mapStateToProps = state => {
  return {articles: state.articles.toJS().list, isLoading: state.articles.toJS().isLoading};
};

export default connect(mapStateToProps, actions)(Articles);