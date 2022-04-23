// Components/Search.js
import React from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import FilmList from "./FilmList";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBA.js";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = ""; // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: [],
      isLoading: false,
    };
    this.page = 0;
    this.totalPages = 0;
  }

  _loadFilms(doRefresh = false) {
    if (this.searchedText.length > 0 && !this.isLoading) {
      this.setState({ isLoading: true });
      if (doRefresh) this.page = 0;
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(
        (data) => {
          this.page = data.page;
          this.totalPages = data.total_pages;
          this.setState({
            films: doRefresh
              ? [...data.results]
              : [...this.state.films, ...data.results],
            isLoading: false,
          });
        }
      );
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text; // Modification du texte recherché à chaque saisie de texte, sans passer par setState
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          placeholder="Titre du film"
          style={styles.textinput}
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadFilms(true)}
        />
        <Button
          title="Rechercher"

          onPress={() => this._loadFilms(true)}
        />
        <FilmList films={this.state.films}></FilmList>
        {this._displayLoading()}
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm,
  };
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
    maxHeight: 5000,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps)(Search);
