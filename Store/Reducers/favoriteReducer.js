const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      /*
      La première chose que l'on réalise dans l'action est de vérifier que le film passé via l'action existe dans la liste des films favoris. Souvenez-vous, on fait passer l'objet d'une action (ici notre film) dans le champ value (d'où le code action.value). Pour savoir si le film est déjà présent dans la liste des films favoris, on utilise la fonction findIndex en Javascript qui retourne l'index de l'élément dans le tableau s'il existe, sinon elle renvoie -1
      */
      const favoriteFilmIndex = state.favoritesFilm.findIndex(
        (item) => item.id === action.value.id
      )
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter(
            (item, index) => index !== favoriteFilmIndex
          ),
        }
      } else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value],
        }
      }
      // renvoie l'objet  nextState  si celui-ci n'est pas undefined, sinon on renvoie l'objet  state
      // code robuste
      return nextState || state
    default:
      return state
  }
}

export default toggleFavorite