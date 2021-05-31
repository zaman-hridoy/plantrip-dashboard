import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import CollapseAbleList from './CollapseableList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing(1),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { title, items } = props;
  return (
          <List 
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader" style={{color: '#f2f2f2'}}>
                {title}
              </ListSubheader>
            }
            className={classes.root}
          >
            {items.map(item => (
              <CollapseAbleList key={item.id} item={item} />
            ))}
          </List>
  );
}

