import history from '../history';

import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import { fetchPayments, deletePayment } from '../actions';

import { connect } from 'react-redux';



class Home extends React.Component {

  state = { open: false, id: null};

  componentDidMount() {
    this.props.fetchPayments();
  }

  renderDateFormat(date) {
    const day   = parseInt(date.getDate()) < 10    ? '0' + date.getDate()  : date.getDate();
    const month = parseInt(date.getMonth()+1) < 10 ? '0' + date.getMonth() : date.getMonth() + 1;
    return `${day}/${month}/${date.getFullYear()}`;
  }

  renderTableData () {
    const { payments } = this.props;
    return payments.map(row => {
      return (
      <TableRow key={row.id} >
        <TableCell align="left" component="th" scope="row">
          { this.renderDateFormat( new Date(row.datePicker))}
        </TableCell>
        <TableCell  align="center">
          {row.currencyInput}
        </TableCell>
        <TableCell align="center">
          {row.description}
        </TableCell>
        <TableCell align="center">

          <IconButton aria-label="delete" onClick={() => {history.push(`/edit/${row.id}`)}}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => { this.openDeleteModal(row.id) }}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      )
    });
  }

  openDeleteModal(id) {
    this.setState( {open: true, id} );
  }

  render() {
    return (
      <React.Fragment>

          <Table className="data-table" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Date</TableCell>
                <TableCell align="center">Cost</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.renderTableData()
              }
            </TableBody>
          </Table>

        <div className="fab-bottom-right-container">
          <Fab color="primary" aria-label="add" onClick={() => history.push('/new')}  >
            <AddIcon />
          </Fab>
        </div>

        <Dialog  aria-labelledby="simple-dialog-title" open={this.state.open}  onClose={this.handleClose} >
          <DialogTitle id="simple-dialog-title">Payments</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.deletePayment} color="secondary">
              Delete
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

  handleClose = () => {
    this.setState( {open: false, id:null } );
  }

  deletePayment = () => {
    this.props.deletePayment(this.state.id, this.props.payments);
    this.handleClose();
  }
}

const mapStateToProps = state => {
  return {
      payments: state.payments.paymentsList
  };
}

export default connect(mapStateToProps,{ fetchPayments, deletePayment })(Home);
