import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import project1 from "../images/html-css-javascript-lg.jpg"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import Navbar from "./Navbar";

const Work=()=>{
    return(
      <Box component="div">
        <Navbar/>
        <Grid container justify="center" alignItems="center">
              {/* {Project1} */}
              <Grid item x5={12} sm={8} md={6}>
                <Card>
                  <CardActionArea>
                      <CardMedia 
                        component="img" 
                        alt="Project 1" 
                        height ="140" 
                        image={project1}
                      />
                  </CardActionArea>
              </Card>
              </Grid>
        </Grid>

      </Box>
          
          
        
    )
};

export default Work;