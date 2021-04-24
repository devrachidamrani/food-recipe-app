import React, { useEffect, useState } from "react"
import RecipeCard from "../components/RecipeCard"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import { useDispatch } from "react-redux"

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const dispatch = useDispatch()

  const fetchRecipes = async () => {
    const data = await fetch("http://localhost:8080/recipes")
    const recipes = await data.json()
    setRecipes(recipes)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <>
      <Typography variant="h2" gutterBottom align="center">
        All Recipes
      </Typography>
      <Grid container spacing={2}>
        {recipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe.id} dispatch={dispatch} />
        ))}
      </Grid>
    </>
  )
}

export default AllRecipes
