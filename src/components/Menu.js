import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const links = ["Home", "Link2", "Link3", "Link4", "Link5", "Link6", "Link7"];

export default function Menu() {
  return (
    <List component="nav">
      {links.map((link, index) => (
        <ListItem button component={Link} to={`/${link.toLowerCase()}`} key={index}>
          <ListItemText primary={link} />
        </ListItem>
      ))}
    </List>
  );
}
