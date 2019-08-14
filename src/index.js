import React from 'react';
import ReactDOM from 'react-dom';
import CustomColumnsTable from './lib/CustomColumnsTable';
const columnsArray = [{label:"Country",value:"country"},{label:"Language",value:"language"},
{label:"Continent",value:"continent"},{label:"Capital",value:"capital"}
];
const itemList = [{id:"mx",country:"Mexico",language:"Spanish",continent:"American",capital:"Mexico City"},
{id:"usa",country:"USA",language:"English",continent:"American",capital:"Washington DC"},
{id:"ger",country:"Germany",language:"German",continent:"Europe",capital:"Berlin"},
{id:"spa",country:"Spain",language:"Spanish",continent:"Europe",capital:"Madrid"},
{id:"can",country:"Canada",language:"French,English",continent:"American",capital:"Ottawa"},
{id:"uru",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},
{id:"uru1",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},
{id:"uru2",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},
{id:"uru3",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},
{id:"uru4",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},
{id:"uru5",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},
{id:"uru6",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},
{id:"uru7",country:"Uruguay",language:"Spanish",continent:"American",capital:"Montevideo"},


]; 
 
ReactDOM.render( 
    <CustomColumnsTable columnsArray={columnsArray} 
    changePageCallback={(page)=>window.alert("hey hey you are in page : " + page)}
    changeRowsPerPageCallback={(rowsPerPage)=>window.alert("uhm ... you have : " + rowsPerPage + " rows per page")}
        itemsList ={itemList} defaultColumns={["country","language"]} numberColumnLabel={"#"} />
    , document.getElementById('root'));


