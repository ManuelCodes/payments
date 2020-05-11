import React from 'react';

import _ from 'lodash';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { fetchPayments } from '../actions';
import { connect } from 'react-redux';

class Header extends React.Component {

  componentDidMount() {
    this.props.fetchPayments();
  }

  render() {
    const { payments }  = this.props;
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
              Total amount: <b>
                { _.sumBy(payments, (payment) => parseFloat(payment.currencyInput) ) }
              </b>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      payments: state.payments.paymentsList
  };
}

export default connect(mapStateToProps,{fetchPayments})(Header);
