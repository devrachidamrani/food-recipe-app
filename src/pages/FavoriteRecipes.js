import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import RecipeCard from "../components/RecipeCard"
import { useSelector } from "react-redux"
import { Divider } from "@material-ui/core"

const FavoriteRecipes = () => {
  const favoriteRecipes = useSelector(state => state.favoriteRecipes)

  return (
    <>
      <Typography variant="h2" gutterBottom align="center">
        Favorite Recipes
      </Typography>

      <Divider />

      <div style={{ marginTop: "1rem" }}>
        {favoriteRecipes.length === 0 ? (
          <Typography variant="h6">No Favorite Recipes found</Typography>
        ) : (
          <Grid container spacing={2}>
            {favoriteRecipes.map(recipe => (
              <RecipeCard recipe={recipe} key={recipe.id} favorite={true} />
            ))}
          </Grid>
        )}
      </div>
    </>
  )
}

export default FavoriteRecipes
