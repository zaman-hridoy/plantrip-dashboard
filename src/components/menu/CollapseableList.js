import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import SendIcon from '@material-ui/icons/Send';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing(3.5),
  },
}));

export default function CollapseAbleList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const { item } = props;
  return (
      <>
        <ListItem button onClick={handleClick}>
            <ListItemIcon style={{ minWidth: 40 }}>
                {item.icon}
                {/* <InboxIcon style={{ color: theme.palette.common.subColor }} /> */}
            </ListItemIcon>
            <ListItemText primary={item.name} style={{ color: theme.palette.common.subColor }} />
            {item.children && (
              open ? <ArrowDown style={{ color: theme.palette.common.subColor }} /> : <ArrowRight style={{ color: theme.palette.common.subColor }} />
            )}
        </ListItem>
        {item.children && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                  {item.children.map(childitem => (
                      <ListItem button className={classes.nested} key={childitem.id}>
                          <ListItemIcon style={{ minWidth: 30 }}>
                              <TripOriginIcon style={{ color: theme.palette.common.subColor, width: 10, height: 10 }} />
                          </ListItemIcon>
                          <ListItemText primary={childitem.name} style={{ color: theme.palette.common.subColor }} />
                      </ListItem>
                  ))}
              </List>
          </Collapse>
        )}
      </>
  );
}

