import React from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from './lib/MaterialTable';
const columnsArray = [{label:"Country",value:"country"},{label:"Language",value:"language"},
{label:"Continent",value:"continent"},{label:"Capital",value:"capital"}
];
const itemList = [{id:"mx",country:"Mexico",language:"Spanish",continent:"American",capital:"Mexico City"},
{id:"usa",country:"USA",language:"English",continent:"American",capital:"Washington DC"},
{id:"ger",country:"Germany",language:"German",continent:"Europe",capital:"Berlin"},
{id:"spa",country:"Spain",language:"Spanish",continent:"Europe",capital:"Madrid"},
{id:"can",country:"Canada",language:"French,English",continent:"American",capital:"Ottawa"},
{id:"uru",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},


]; 
 
ReactDOM.render( 
    <MaterialTable columnsArray={columnsArray}
        itemsList ={itemList} defaultColumns={["country","language"]} numberColumnLabel={"#"} />
    , document.getElementById('root'));


