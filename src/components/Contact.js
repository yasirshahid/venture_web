import { Typography,Box,Grid, List, ListItem, Divider } from "@material-ui/core";
import {Smartphone,Email, Height} from "@material-ui/icons";
import React from "react";
import Navbar from "./Navbar";
import Typed from "react-typed";

import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme=> ({
    main:{

        color: "#D5D8DC",
        fontFamily: "'Comfortaa', cursive;",
        marginLeft: "40px",
        marginTop: "20%"
        
        
        
    },
    iconText: {
        color: "#D5D8DC",
        marginLeft: "20px",   
        
    }
}));

const Contact = () => { 
    const classes = useStyles();
    return(
        <div>
          <Navbar/>
          <Box>
              <Grid container justify ="left">
                  <Typography className={classes.main} variant="h5">
                   HOW TO <br/>
                   CONTACT US
                  </Typography>
                  
                  
              </Grid>
              <Divider/>
                  <List className={classes.iconText}>
                      <ListItem>
                        <Smartphone />
                        <Typography variant="h6">
                        <Typed strings={["Contact: +92 324 2263171"]} typeSpeed={20}/>
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Email/>
                        <Typography variant="h6">
                        <Typed strings={["Email: venture.pk@yahoo.com"]} typeSpeed={30}/>
                        </Typography>
                      </ListItem>
                  </List>
                  
                  
                  
              
          </Box>
         
        </div>
    )
};

export default Contact;