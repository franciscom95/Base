import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "../../assets/jss/material-dashboard-react/components/tableStyle";
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import EditarCliente from "../FromulariosEdicion/EditarCliente";

class CustomTable extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      open: true
    };
    
  }
 

  
  render(){
    
   
    const { classes, tableHead, tableData, tableHeaderColor } = this.props;
 
  
    return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}  >
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key}>
              {prop.map((prop, key) => {
                return (
                  <TableCell className={classes.tableCell} key={key}>
                    {prop}
                  </TableCell>                   
                );
              })}
              <TableCell>
          <Edit color="primary"   onClick={() =>  console.log(prop) } />
          <Delete color="error" style={{ marginLeft:20 , marginTop:8 }}  onClick={() =>  this.setState({open:true})   }   />
          
                </TableCell>
        
            </TableRow>
            );
          })}
        </TableBody>
        
   
      </Table>
     
     <EditarCliente EsMostrarEdicion={this.state.open}  />
    </div>
     
    
   
    )
   
  }
 
 
}
CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
