import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/contacts">
          <ListItemText primary="Contacts" />
        </ListItem>
        <ListItem button component={Link} to="/todo">
          <ListItemText primary="Todo" />
        </ListItem>
      </List>
    </Drawer>
  );
}