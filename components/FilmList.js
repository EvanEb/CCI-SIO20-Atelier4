import React from "react";
import { FlatList } from "react-native";
import FilmItem from "./FilmItem";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

class FilmList extends React.Component {
  _displayDetailForFilm = (idFilm, listId) => {
    console.log("film.id=" + idFilm + " film.listId=" + listId);
    this.props.navigation.navigate("FilmDetail", { idFilm: idFilm });
  };

  render() {
    const films = this.props.films;
    return (
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (this.page < this.totalPages) {
            // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
            this._loadFilms();
          }
        }}
        keyExtractor={(item) => item.listId.toString()}
        data={films}
        extraData={films.favoritesFilm}
        renderItem={({ item }) => (
          <FilmItem
            film={item}
            isFilmFavorite={
              this.props.favoritesFilm.findIndex(
                (film) => film.id === item.id
              ) !== -1
            }
            displayDetailForFilm={this._displayDetailForFilm}
          />
        )}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm,
  };
};

export default withNavigation(connect(mapStateToProps)(FilmList));
