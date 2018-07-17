import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import ButtonIndicator from "../Indicator/ButtonIndicator";
import Lock from '@material-ui/icons/Lock';

const styles =  {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },

};


function Login(props) {
  const { classes } = props;
 
  return (
    <div >
      <Grid container justify="center"  >
        <GridItem xs={12} sm={12} md={7}  >
          <Card >
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Iniciar Sesión    <Lock /> </h4> 
              <p className={classes.cardCategoryWhite}>por favor ingrese sus credenciales.</p>
            </CardHeader>
            <CardBody >
              <Grid container>
                
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Password"
                    id="Password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </Grid>
          
            
            </CardBody>
            <CardFooter>
              <ButtonIndicator Texto={"Iniciar Sesión"} />
            </CardFooter>
          </Card>
        </GridItem>
   
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Login);
