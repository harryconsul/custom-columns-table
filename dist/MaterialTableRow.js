import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
var stylePaciente = {
  fontWeight: "560"
};

var MaterialTableRow = function MaterialTableRow(props) {
  return React.createElement(TableRow, {
    key: props.atencionId,
    hover: true
  }, React.createElement(TableCell, {
    padding: "checkbox",
    style: {
      width: "50px"
    }
  }), React.createElement(TableCell, {
    align: "left",
    onClick: props.rowClickHandle
  }, props.rowIndex), props.columnsSelected.map(function (item) {
    return React.createElement(TableCell, {
      key: item,
      align: "left",
      onClick: props.rowClickHandle,
      style: item === "paciente" ? stylePaciente : null
    }, item === "esUrgente" ? props.esUrgente ? props.urgenteChip : '' : props[item]);
  }), React.createElement(TableCell, null, props.tools));
};

export default MaterialTableRow;