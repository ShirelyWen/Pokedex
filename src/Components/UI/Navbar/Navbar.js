import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  backColor: {
    backgroundColor: "#a040a0",
    width: "100%",
    height: 70,
    display: "flex",
    alignItems: "center",
    position: "fixed",
    zIndex: 500
  },
  buttonColor: {
    color: "#fff",
    borderRadius: "50%"
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Pokedex.org"].map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Pokémon", "About"].map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.backColor}>
        <Button
          className={classes.buttonColor}
          onClick={toggleDrawer("left", true)}
        >
          <DehazeIcon></DehazeIcon>
        </Button>
      </div>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
