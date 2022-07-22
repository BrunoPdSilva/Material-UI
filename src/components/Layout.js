import {
  makeStyles,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2)
    }
  };
});

export function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" path="/" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" path="/create" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>Ninja Notes</Typography>
        </div>

        {/* List  / Links */}
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
}
