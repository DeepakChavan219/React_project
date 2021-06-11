import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Routes from "./Routes";
import { Link } from "react-router-dom";

const ScreenList = () => {
  return (
    <>
      <List>
        {Routes.map((Route, index) => (
          <ListItem button key={Route.title + index}>
            <Link to={`/secured${Route.path}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={Route.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ScreenList;
