import Layout from "./components/Layout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AllRecipes from "./pages/AllRecipes"
import FavoriteRecipes from "./pages/FavoriteRecipes"
import RecipeDetails from "./components/RecipeDetails"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <AllRecipes />
          </Route>
          <Route exact path="/favorites">
            <FavoriteRecipes />
          </Route>
          <Route exact path="/details/:id">
            <RecipeDetails />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
