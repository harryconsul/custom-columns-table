import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import MaterialTableColumnChooser from './MaterialTableColumnChooser'
const  MaterialTableHeader =props=>{
    return(
      <TableHead>
            <TableRow key="header">
                <TableCell style={{width:"55px"}}><MaterialTableColumnChooser {...props} /> </TableCell>
                <TableCell align="left">{props.numberColumnLabel}</TableCell>
                {props.columnsSelected.map(item=>{ 
                    const _column = props.columnsArray.find(column=>column.value===item);
                  return <TableCell key={item} align="left">
                
                          {_column?_column.label:item}
                        </TableCell>;
                }

                )}
              
                <TableCell />
        </TableRow>
      </TableHead>

    );
}

export default MaterialTableHeader;
