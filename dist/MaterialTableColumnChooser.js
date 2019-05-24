import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { MenuItem, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import EyeSettings from '@material-ui/icons/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

var MaterialTableColumnChooser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MaterialTableColumnChooser, _React$Component);

  function MaterialTableColumnChooser() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MaterialTableColumnChooser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MaterialTableColumnChooser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.columnsHandle = function (event) {
      var columnsSelected = _toConsumableArray(_this.props.columnsSelected);

      var indexOf = columnsSelected.indexOf(event.target.value);

      if (indexOf < 0) {
        columnsSelected.push(event.target.value);

        var orderedColumns = _this.props.columnsArray.reduce(function (previous, current) {
          return columnsSelected.indexOf(current.value) >= 0 ? [].concat(_toConsumableArray(previous), [current.value]) : previous;
        }, []);

        columnsSelected = orderedColumns;
      } else columnsSelected.splice(indexOf, 1);

      _this.props.columnsHandle(columnsSelected);
    };

    return _this;
  }

  _createClass(MaterialTableColumnChooser, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        style: {
          float: "right"
        }
      }, React.createElement(IconButton, {
        "aria-label": "Columnas",
        onClick: this.props.openHandle,
        "aria-owns": this.props.columnsAnchor ? 'menuColumnas' : undefined,
        "aria-haspopup": "true"
      }, React.createElement(EyeSettings, null)), React.createElement(Menu, {
        multiple: true,
        open: Boolean(this.props.columnsAnchor),
        onClose: this.props.closeHandle,
        id: "menuColumnas",
        anchorEl: this.props.columnsAnchor
      }, this.props.columnsArray.map(function (item) {
        return React.createElement(MenuItem, {
          key: item.value
        }, React.createElement(FormControlLabel, {
          control: React.createElement(Checkbox, {
            checked: _this2.props.columnsSelected.indexOf(item.value) > -1,
            value: item.value,
            onChange: _this2.columnsHandle
          }),
          label: item.label
        }));
      })));
    }
  }]);

  return MaterialTableColumnChooser;
}(React.Component);

export default MaterialTableColumnChooser;