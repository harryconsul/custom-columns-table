import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const stylePaciente={fontWeight:"560"};
const  MaterialTableRow =props=>{
    
    return(
        <TableRow key={props.atencionId} hover={true}  >
            <TableCell></TableCell>
            <TableCell  align="left" onClick={props.rowClickHandle}>{props.rowIndex}</TableCell>
            {props.columnsSelected.map(item=> <TableCell key={item} align="left" 
            onClick={props.rowClickHandle} style={item==="paciente"?stylePaciente:null}>
            {item==="esUrgente"?(props.esUrgente?props.urgenteChip:''):props[item]}
            </TableCell>
            )}
          
            <TableCell>
                {props.tools}         
            </TableCell>
            
      </TableRow>

    );
}


export default MaterialTableRow;
