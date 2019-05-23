# Material Table

A ready and simple to use Table component based on Material-UI Library

## Install
Run the following command:
`npm install material-table`

## How to use

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from './lib/MaterialTable';
const columnsArray = [{label:"Country",value:"country"},{label:"Language",value:"language"},
{label:"Continent",value:"continent"},{label:"Capital",value:"capital"}
];
const itemsList = [{id:"mx",country:"Mexico",language:"Spanish",continent:"American",capital:"Mexico City"},
{id:"usa",country:"USA",language:"English",continent:"American",capital:"Washington DC"},
{id:"ger",country:"Germany",language:"German",continent:"Europe",capital:"Berlin"},
{id:"spa",country:"Spain",language:"Spanish",continent:"Europe",capital:"Madrid"},
{id:"can",country:"Canada",language:"French,English",continent:"American",capital:"Ottawa"},
{id:"uru",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},
];  
//defaultColumns is an array of values that comes from 'columnsArray' list
ReactDOM.render( 
    <MaterialTable columnsArray={columnsArray}
        itemsList ={itemList} defaultColumns={["country","language"]} numberColumnLabel={"#"} />
    , document.getElementById('root'));
```

## Props
List of props that you may use:
-- Required props
*`columnsArray` is the list of columns that the table may have each item has this picture `{value:"value",label:"label"}`.
*`itemsList` is the array of the items to display in the body of the table , each item must have an `id` field and the others fields must be part of columnsArray value set.
-- Optional props
*`defaultColumns` is an array of strings  that comes from 'columnsArray' value set.
*`numberColumnLabel` is the title of the column that displays the row number.
*`labelRowsPerPage`is the label to display in the paging footer beside de combo of rows per page.
*`rowClickHandle` callback function for the on click event of each row




