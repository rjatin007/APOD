// library imports
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';


// file imports

import ListContainer from './ListContainer';
import { fetchDataAndSetNavigation, selectItem } from '../store/actions'


class App extends React.Component {
  componentDidMount() {
    const { mykey,
      navigation,
      fetchDataAndSetNavigation,
    } = this.props
    fetchDataAndSetNavigation(navigation, mykey);
  }

  render() {
    const { data } = this.props;
    if (data.length > 0) console.log('[APP] got data')
    return (
      <View style={styles.container}>
        <ListContainer data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = state => ({
  data: state.data,
  mykey: state.mykey,
  saved: state.saved
})
const mapDispatchToProps = dispatch => ({
  fetchDataAndSetNavigation: (navigation, mykey) => dispatch(fetchDataAndSetNavigation(navigation, mykey)),
  selectItem: (item) => dispatch(selectItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);