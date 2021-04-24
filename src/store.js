import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = {
  favoriteRecipes: [],
}

const recipesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "AddFavoriteRecipe":
      const found = state.favoriteRecipes.find(
        recipe => recipe.id === payload.id
      )

      if (found) return state

      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, payload],
      }
    case "RemoveFromFavoriteRecipes":
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter(
          recipe => recipe.id !== payload.id
        ),
      }
      break
    default:
      return state
  }
}

const store = createStore(
  recipesReducer,
  composeWithDevTools(applyMiddleware())
)

export default store
