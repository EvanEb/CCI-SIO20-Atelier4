import { createStore } from "redux"
import toggleFavorite from "./Reducers/favoriteReducer"

// On initialise le store en lui faisant passer notre reducer.
export default createStore(toggleFavorite)