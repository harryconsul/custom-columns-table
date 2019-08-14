import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import MaterialTableRow from './MaterialTableRow';
import MaterialTablePaging from './MaterialTablePaging';

import MaterialTableHeader from './MaterialTableHeader';
import PropTypes from 'prop-types';

class CustomColumnsTable extends React.Component {
  constructor() {
    super();
    this.state = {
      rowsPerPage: 10, page: 0, emptyRows: 0, columnsSelected: [], columnsAnchor: null
    }

  }

  handleChangePage = (event, page) => {

    let newState = { ...this.state };
    newState.page = page;
    this.setState(newState)
    if(this.props.changePageCallback){
      this.props.changePageCallback(page);
    }

  };

  handleChangeRowsPerPage = event => {
    let newState = { ...this.state };
    newState.rowsPerPage = event.target.value * 1;

    this.setState(newState);
    if(this.props.changeRowsPerPageCallback){
      this.props.changeRowsPerPageCallback(newState.rowsPerPage);
    }
  };

  columnsEventHandler = columnsSelected => {
    if (this.props.onSetPreference) {
      this.props.onSetPreference(this.props.tableFeatureName, columnsSelected)
    }else{
      this.setState({columnsSelected:columnsSelected});

    }
    if(this.props.savePreferenceToServer){
      this.props.savePreferenceToServer(columnsSelected);
    }
    
  };

  openColumnsEventHandler = (event) => {
    let newState = { ...this.state };
    newState.columnsAnchor = event.currentTarget;
    this.setState(newState);

  }
  closeColumnsEventHandler = () => {
    let newState = { ...this.state };
    newState.columnsAnchor = null;
    this.setState(newState);

  }
  componentDidMount(){
    
    if(!this.props.preferences.columnsSelected && this.props.defaultColumns){
        this.setState({columnsSelected:this.props.defaultColumns})
      
    }
  }

  render() {
    const _columns = this.props.preferences.columnsSelected ? this.props.preferences.columnsSelected : this.state.columnsSelected;
    const _rowShift = this.state.page * this.state.rowsPerPage;
    const rowsToDisplay =
      this.props.itemsList.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, index) => {
        return (
          <MaterialTableRow columnsSelected={_columns}
            {...row} key={row.id} rowIndex={_rowShift+index+1}
            rowClickHandle={() => {
              if(this.props.rowClickHandle){
                this.props.rowClickHandle(row.id)
              }
              }}
            tools={(this.props.toolbar?<this.props.toolbar {...row} />:null)}
          />
        );
      })
    const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.props.itemsList.length - this.state.page * this.state.rowsPerPage);
    return (
      <Paper style={{ padding: "10px",overflowX:"hidden" }}>
               
          <Table >
            <MaterialTableHeader columnsSelected={_columns}
              columnsArray={this.props.columnsArray}
              numberColumnLabel={this.props.numberColumnLabel}
              closeHandle={this.closeColumnsEventHandler} openHandle={this.openColumnsEventHandler}
              columnsAnchor={this.state.columnsAnchor} columnsHandle={this.columnsEventHandler}
              
            />
            <TableBody>
              {rowsToDisplay}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * this.state.emptyRows }} key="empty">
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>

                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={this.props.itemsList.length}
                  rowsPerPage={this.state.rowsPerPage + 0}
                  labelRowsPerPage={this.props.labelRowsPerPage}
                  labelDisplayedRows={({ from, to, count }) => {
                    return (from + '-' + to + ' de ' + count);
                  }}
                  page={this.state.page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={MaterialTablePaging}
                />

              </TableRow>
            </TableFooter>
          </Table>
        
      </Paper>

    );
  }

}
CustomColumnsTable.defaultProps={
  preferences:{},
  numberColumnLabel:"#",
  labelRowsPerPage:"Rows per Page",
}
CustomColumnsTable.propTypes={
  itemsList:PropTypes.array.isRequired,
  labelRowsPerPage: PropTypes.string.isRequired,
  defaultColumns: PropTypes.array,
  columnsArray: PropTypes.array.isRequired,
  savePreferenceToServer: PropTypes.func,
  toolbar:PropTypes.object,
  preferences:PropTypes.object,
  numberColumnLabel:PropTypes.string,
}
export default CustomColumnsTable;
