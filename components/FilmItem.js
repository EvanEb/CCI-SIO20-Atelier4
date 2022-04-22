// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import dayjs from 'dayjs'
import { getImageFromApi } from '../API/TMDBA.js'

class FilmItem extends React.Component {
  render() {
    const { film, isFilmFavorite, displayDetailForFilm } = this.props
    const rd = dayjs(film.release_date)
    const d = rd.format('DD/MM/YYYY')
    const description = film.overview
    const vote = film.vote_average
    const titre = film.original_title
    const src = film.poster_path
    console.log(isFilmFavorite)
    return (
      <Pressable onPress={ () => displayDetailForFilm(film.id, film.listId) } >
        <View style={styles.main_container}>
          <Image style={styles.image} source={getImageFromApi(film.poster_path)} />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{isFilmFavorite ? "♥ " : ""}{titre}</Text>
              <Text style={styles.vote_text}>{vote}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>
                {description}
              </Text>
              {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>{'Sorti le ' + d}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666',
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
  },
  date_container: {
    flex: 1,
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14,
  },
})

export default FilmItem
