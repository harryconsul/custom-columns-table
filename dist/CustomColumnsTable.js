import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
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

var CustomColumnsTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomColumnsTable, _React$Component);

  function CustomColumnsTable() {
    var _this;

    _classCallCheck(this, CustomColumnsTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomColumnsTable).call(this));

    _this.handleChangePage = function (event, page) {
      var newState = _objectSpread({}, _this.state);

      newState.page = page;

      _this.setState(newState);

      if (_this.props.changePageCallback) {
        _this.props.changePageCallback(page);
      }
    };

    _this.handleChangeRowsPerPage = function (event) {
      var newState = _objectSpread({}, _this.state);

      newState.rowsPerPage = event.target.value * 1;

      _this.setState(newState);

      if (_this.props.changeRowsPerPageCallback) {
        _this.props.changeRowsPerPageCallback(newState.rowsPerPage);
      }
    };

    _this.columnsEventHandler = function (columnsSelected) {
      if (_this.props.onSetPreference) {
        _this.props.onSetPreference(_this.props.tableFeatureName, columnsSelected);
      } else {
        _this.setState({
          columnsSelected: columnsSelected
        });
      }

      if (_this.props.savePreferenceToServer) {
        _this.props.savePreferenceToServer(columnsSelected);
      }
    };

    _this.openColumnsEventHandler = function (event) {
      var newState = _objectSpread({}, _this.state);

      newState.columnsAnchor = event.currentTarget;

      _this.setState(newState);
    };

    _this.closeColumnsEventHandler = function () {
      var newState = _objectSpread({}, _this.state);

      newState.columnsAnchor = null;

      _this.setState(newState);
    };

    _this.state = {
      rowsPerPage: 10,
      page: 0,
      emptyRows: 0,
      columnsSelected: [],
      columnsAnchor: null
    };
    return _this;
  }

  _createClass(CustomColumnsTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.preferences.columnsSelected && this.props.defaultColumns) {
        this.setState({
          columnsSelected: this.props.defaultColumns
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _columns = this.props.preferences.columnsSelected ? this.props.preferences.columnsSelected : this.state.columnsSelected;

      var _rowShift = this.state.page * this.state.rowsPerPage;

      var rowsToDisplay = this.props.itemsList.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(function (row, index) {
        return React.createElement(MaterialTableRow, Object.assign({
          columnsSelected: _columns
        }, row, {
          key: row.id,
          rowIndex: _rowShift + index + 1,
          rowClickHandle: function rowClickHandle() {
            if (_this2.props.rowClickHandle) {
              _this2.props.rowClickHandle(row.id);
            }
          },
          tools: _this2.props.toolbar ? React.createElement(_this2.props.toolbar, row) : null
        }));
      });
      var emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.props.itemsList.length - this.state.page * this.state.rowsPerPage);
      return React.createElement(Paper, {
        style: {
          padding: "10px",
          overflowX: "hidden"
        }
      }, React.createElement(Table, null, React.createElement(MaterialTableHeader, {
        columnsSelected: _columns,
        columnsArray: this.props.columnsArray,
        numberColumnLabel: this.props.numberColumnLabel,
        closeHandle: this.closeColumnsEventHandler,
        openHandle: this.openColumnsEventHandler,
        columnsAnchor: this.state.columnsAnchor,
        columnsHandle: this.columnsEventHandler
      }), React.createElement(TableBody, null, rowsToDisplay, emptyRows > 0 && React.createElement(TableRow, {
        style: {
          height: 48 * this.state.emptyRows
        },
        key: "empty"
      }, React.createElement(TableCell, {
        colSpan: 6
      }))), React.createElement(TableFooter, null, React.createElement(TableRow, null, React.createElement(TablePagination, {
        rowsPerPageOptions: [5, 10, 25],
        count: this.props.itemsList.length,
        rowsPerPage: this.state.rowsPerPage + 0,
        labelRowsPerPage: this.props.labelRowsPerPage,
        labelDisplayedRows: function labelDisplayedRows(_ref) {
          var from = _ref.from,
              to = _ref.to,
              count = _ref.count;
          return from + '-' + to + ' de ' + count;
        },
        page: this.state.page,
        SelectProps: {
          native: true
        },
        onChangePage: this.handleChangePage,
        onChangeRowsPerPage: this.handleChangeRowsPerPage,
        ActionsComponent: MaterialTablePaging
      })))));
    }
  }]);

  return CustomColumnsTable;
}(React.Component);

CustomColumnsTable.defaultProps = {
  preferences: {},
  numberColumnLabel: "#",
  labelRowsPerPage: "Rows per Page"
};
export default CustomColumnsTable;