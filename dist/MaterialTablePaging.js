import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
/*
const actionsStyles = theme => ({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5,
    },
  });
  */

var MaterialTablePaging =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MaterialTablePaging, _React$Component);

  function MaterialTablePaging() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MaterialTablePaging);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MaterialTablePaging)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleFirstPageButtonClick = function (event) {
      _this.props.onChangePage(event, 0);
    };

    _this.handleBackButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page - 1);
    };

    _this.handleNextButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page + 1);
    };

    _this.handleLastPageButtonClick = function (event) {
      _this.props.onChangePage(event, Math.max(0, Math.ceil(_this.props.count / _this.props.rowsPerPage) - 1));
    };

    return _this;
  }

  _createClass(MaterialTablePaging, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          count = _this$props.count,
          page = _this$props.page,
          rowsPerPage = _this$props.rowsPerPage;
      var theme = {
        direction: 'ltr'
      };
      var divStyle = {
        minWidth: '300px'
      };
      return React.createElement("div", {
        style: divStyle
      }, React.createElement(IconButton, {
        onClick: this.handleFirstPageButtonClick,
        disabled: page === 0,
        "aria-label": "First Page"
      }, theme.direction === 'rtl' ? React.createElement(LastPageIcon, null) : React.createElement(FirstPageIcon, null)), React.createElement(IconButton, {
        onClick: this.handleBackButtonClick,
        disabled: page === 0,
        "aria-label": "Previous Page"
      }, theme.direction === 'rtl' ? React.createElement(KeyboardArrowRight, null) : React.createElement(KeyboardArrowLeft, null)), React.createElement(IconButton, {
        onClick: this.handleNextButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1,
        "aria-label": "Next Page"
      }, theme.direction === 'rtl' ? React.createElement(KeyboardArrowLeft, null) : React.createElement(KeyboardArrowRight, null)), React.createElement(IconButton, {
        onClick: this.handleLastPageButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1,
        "aria-label": "Last Page"
      }, theme.direction === 'rtl' ? React.createElement(FirstPageIcon, null) : React.createElement(LastPageIcon, null)));
    }
  }]);

  return MaterialTablePaging;
}(React.Component);

export default MaterialTablePaging;