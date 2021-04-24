import React from "react"
import Grid from "@material-ui/core/Grid"
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { useHistory, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    cursor: "pointer",
  },
  iconBtn: {
    marginTop: "0.5rem",
  },
  flexGrow: {
    flexGrow: 1,
  },
})

const Recipe = ({ recipe }) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  const handleDeleteFromFavorites = id => {
    dispatch({
      type: "RemoveFromFavoriteRecipes",
      payload: id,
    })
  }

  const handleAddToFavorite = recipe => {
    dispatch({
      type: "AddFavoriteRecipe",
      payload: recipe,
    })
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={recipe.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {recipe.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {recipe.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {location.pathname === "/favorites" ? (
            <Button
              size="small"
              color="secondary"
              onClick={() => handleDeleteFromFavorites(recipe)}
            >
              Remove
            </Button>
          ) : (
            <Button
              size="small"
              color="secondary"
              onClick={() => handleAddToFavorite(recipe)}
            >
              Add to favorite
            </Button>
          )}

          <Button
            size="small"
            color="primary"
            onClick={() => history.push(`/details/${recipe.id}`)}
          >
            Show details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Recipe
