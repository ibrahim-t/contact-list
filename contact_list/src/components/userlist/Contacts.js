import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const ContactTable=["BasicInfo","Company"]
const ContactDetails=[
  {"BasicInfo":"Ibrahim","Company":"private Org"},
  {"BasicInfo":"faisal","Company":"private Org"},
  {"BasicInfo":"Musaib","Company":"private Org"}

]


export default class  Contacts extends React.Component {



  generateTableRows=(rowData,cols)=>{
    return  cols.map(t=><TableCell>{rowData[t]}</TableCell>)
   }
 
   render(){
     const {data,selectedData,onRowSelect}=this.props;
     if(!this.props.data){
       return <h3>No recordFound</h3>
     }
   return   <Table style={{minWidth:650}}  aria-label="contact-table">
         <TableHead>
           <TableRow >
   {data.Cols.map((col,index)=><TableCell key={`${index}-${col}`} >{col}</TableCell>)}
           </TableRow>
         </TableHead>
         <TableBody>
           {data.Rows.map((rows,index)=> <TableRow hover={true} selected={selectedData ?selectedData["index"]===index?true:false:false}  key={index}
           onClick={()=>onRowSelect({...rows,
        index})}
           > {this.generateTableRows(rows,data.Cols)}</TableRow>)}
         </TableBody>
       </Table>;
}
}