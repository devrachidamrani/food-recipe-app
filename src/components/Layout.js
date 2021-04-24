import React from "react"
import AppBar from "@material-ui/core/AppBar"
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import menuItems from "../utils/menuItems"
import { useHistory, useLocation } from "react-router-dom"
import Avatar from "@material-ui/core/Avatar"
import { format } from "date-fns"
import FastfoodIcon from "@material-ui/icons/Fastfood"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  page: {
    width: "100%",
    padding: theme.spacing(3),
  },
  flexGrow: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  active: {
    backgroundColor: "#f4f4f4",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  return (
    <div className={classes.root}>
      {/* App Bar  */}
      <AppBar
        position="fixed"
        elevation={3}
        color="primary"
        className={classes.appBar}
      >
        <Toolbar className={classes.root}>
          <Typography className={classes.flexGrow} variant="h6">
            Today is {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography variant="h6">
            <Avatar>
              <FastfoodIcon />
            </Avatar>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Side Drawer  */}
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="left"
        className={classes.drawer}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Food Recipes
          </Typography>
        </div>
        {/* Links List Section  */}
        <List>
          {menuItems.map(item => {
            return (
              <ListItem
                button
                key={item.title}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon color="secondary">{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            )
          })}
        </List>
      </Drawer>

      {/* Main Content */}

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default Layout
