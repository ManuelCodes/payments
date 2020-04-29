import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {

  render() {
    return (

      <div>
        <AppBar position="static" style={{flexGrow: '1'}}>
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{flexGrow: '1'}} >
            </Typography>
            <Typography variant="h6"  >
              Total amount: <b>$1230.23</b>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}



export default Header;
