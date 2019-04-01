import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import placeReducer from './src/store/reducers/placesReducer';
import * as actionCreators from './src/store/actions/index';

class App extends Component {

  placeAddedHandler = placeName => {
    this.props._onPlaceAdded(placeName)
  };

  placeDeletedHandler = () => {
    this.props._onDeletedPlace();
  };

  modalClosedHandler = () => {
    this.props._onDeselectPlace();
  };

  placeSelectedHandler = key => {
    this.props._onSelectedPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _onPlaceAdded: (placeName) => dispatch(actionCreators.addPlace(placeName)),
    _onDeletedPlace: () => dispatch(actionCreators.deletePlace()),
    _onSelectedPlace: (key) => dispatch(actionCreators.selectPlace(key)),
    _onDeselectPlace: () => dispatch(actionCreators.deletePlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
