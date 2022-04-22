import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FilmList from "./FilmList";
import { connect } from "react-redux";

class Favorites extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Mes Favoris</Text>
        <FilmList films={this.props.favoritesFilm}></FilmList>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm,
  };
};

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(Favorites);
