import NotesIcon from "@material-ui/icons/Notes"
import FavoriteIcon from "@material-ui/icons/Favorite"
import AddIcon from "@material-ui/icons/Add"

const menuItems = [
  {
    title: "All Recipes",
    icon: <NotesIcon />,
    path: "/",
  },
  {
    title: "Favorite Recipes",
    icon: <FavoriteIcon />,
    path: "/favorites",
  },
]

export default menuItems
