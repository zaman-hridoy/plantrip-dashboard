import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from 'react-custom-scrollbars';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import NestedList from './NestedList';

import DashboardIcon from '@material-ui/icons/Dashboard';
import UserIcon from '@material-ui/icons/Person';
import EcommerceIcon from '@material-ui/icons/ShoppingBasket';
import BlogIcon from '@material-ui/icons/AllInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChatIcon from '@material-ui/icons/Chat';
import CalenderIcon from '@material-ui/icons/CalendarToday';


const useStyles = makeStyles( theme => ({
  container: {
        
  },
  logo: {
      marginTop: '1em',
      padding: '0.5em 1em',
      color: '#f2f2f2'
  },
  userWrapper: {
    marginTop: '1em',
    padding: '1em 1.5em',
    boxSizing: 'border-box'
  },
  userInner: {
    background: theme.palette.secondary.main,
    borderRadius: '7px'
  }
}));

const listCount = {
    general: [{
        id: 1,
        name: 'Dashboard',
        icon: <DashboardIcon style={{ color: '#919EAB' }} />,
        children: [{ id: 1, name: 'App'},{id: 2, name: 'Analytics'}]
    }],
    management: [
        {
            id: 1,
            name: 'User',
            icon: <UserIcon style={{ color: '#919EAB' }} />,
            children: [{ id: 1, name: 'Profile'},{id: 2, name: 'Account'}]
        },
        {
            id: 2,
            name: 'E-commerce',
            icon: <EcommerceIcon style={{ color: '#919EAB' }} />,
            children: [{ id: 1, name: 'Shop'},{id: 2, name: 'Product'},{id: 3, name: 'List'},{id: 4, name: 'Checkout'},{id: 5, name: 'Invoice'}]
        },
        {
            id: 3,
            name: 'Blog',
            icon: <BlogIcon style={{ color: '#919EAB' }} />,
            children: [{ id: 1, name: 'Posts'},{id: 2, name: 'Post'},{id: 3, name: 'New Post'}]
        }
    ],
    app: [
        {
            id: 1,
            name: 'Mail',
            icon: <MailIcon style={{ color: '#919EAB' }} />
        },
        {
            id: 1,
            name: 'Chat',
            icon: <ChatIcon style={{ color: '#919EAB' }} />
        },
        {
            id: 1,
            name: 'Calender',
            icon: <CalenderIcon style={{ color: '#919EAB' }} />
        }
    ]
}

function Sidebar() {
    const classes = useStyles();
    return (
        <Scrollbars 
            className={classes.container} 
            style={{height: '100vh', width: '100%'}}
            autoHide
        >
            <div className={classes.logo}>
                <h2>LOGO</h2>
            </div>
            <div className={classes.userWrapper}>
                <Grid container direction="row" spacing={2} className={classes.userInner}>
                    <Grid item>
                        <Avatar alt="Travis Howard" src="/img/user.png" style={{ width: '40px', height: '40px' }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{ color: '#f2f2f2' }}>Travis Howard</Typography>
                        <Typography variant="subtitle2" style={{ color: '#546e7a' }}>Admin</Typography>
                    </Grid>
                </Grid>
            </div>
            <NestedList title="General" items={listCount.general} />
            <NestedList title="Management" items={listCount.management} />
            <NestedList title="App" items={listCount.app} />
        </Scrollbars>
    )
}

export default Sidebar;
