import React from 'react';
import { MenuItem, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import EyeSettings from '@material-ui/icons/CheckBox'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu'



class MaterialTableColumnChooser extends React.Component {
    columnsHandle=(event)=>{
        let columnsSelected = [...this.props.columnsSelected];
        const indexOf = columnsSelected.indexOf(event.target.value)
        if (indexOf < 0) {

            columnsSelected.push(event.target.value);
            let orderedColumns = this.props.columnsArray.reduce((previous, current) =>
            columnsSelected.indexOf(current.value) >= 0 ? [...previous, current.value] : previous
            , []);
            columnsSelected = orderedColumns;

        }
        else
            columnsSelected.splice(indexOf, 1);
        
   

        
        this.props.columnsHandle(columnsSelected);
    }


    render() {
        return (
            <div style={{ float: "right" }} >
                <IconButton aria-label='Columnas' onClick={this.props.openHandle} aria-owns={this.props.columnsAnchor ? 'menuColumnas' : undefined} aria-haspopup="true">
                    <EyeSettings />
                </IconButton>
                <Menu multiple open={Boolean(this.props.columnsAnchor)}
                    onClose={this.props.closeHandle} id='menuColumnas' anchorEl={this.props.columnsAnchor}
                >
                    {this.props.columnsArray.map(item =>
                        <MenuItem key={item.value} >
                            <FormControlLabel control={
                                <Checkbox checked={this.props.columnsSelected.indexOf(item.value) > -1}
                                    value={item.value} onChange={this.columnsHandle} />}
                                label={item.label} />
                        </MenuItem>
                    )}



                </Menu>
            </div>
        );
    }

}

export default MaterialTableColumnChooser;

