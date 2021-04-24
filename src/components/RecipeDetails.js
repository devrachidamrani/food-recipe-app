import React, { useState } from "react"
import { Divider, Grid, makeStyles, Typography } from "@material-ui/core"
import { CardMedia } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  paragraph: {
    marginTop: theme.spacing(2),
  },
  img: {
    width: "100%",
    paddingTop: "1rem",
  },
}))

const RecipeDetails = () => {
  const classes = useStyles()

  const history = useHistory()

  const recipeId = history.location.pathname.split("/")[2]
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8080/recipes/${recipeId}`)
      .then(res => res.json())
      .then(recipe => setRecipe(recipe))
  }, [recipeId])

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {recipe.name} details :{" "}
      </Typography>
      <Divider />
      <Grid container>
        <Grid item md={8}>
          <Typography paragraph className={classes.paragraph}>
            {recipe.description}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <img src={recipe.img} alt={recipe.name} className={classes.img} />
        </Grid>
      </Grid>
    </>
  )
}

export default RecipeDetails
