import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import MaterialTableColumnChooser from './MaterialTableColumnChooser';

var MaterialTableHeader = function MaterialTableHeader(props) {
  return React.createElement(TableHead, null, React.createElement(TableRow, {
    key: "header"
  }, React.createElement(TableCell, {
    style: {
      width: "55px"
    }
  }, React.createElement(MaterialTableColumnChooser, props), " "), React.createElement(TableCell, {
    align: "left"
  }, props.numberColumnLabel), props.columnsSelected.map(function (item) {
    var _column = props.columnsArray.find(function (column) {
      return column.value === item;
    });

    return React.createElement(TableCell, {
      key: item,
      align: "left"
    }, _column ? _column.label : item);
  }), React.createElement(TableCell, null)));
};

export default MaterialTableHeader;