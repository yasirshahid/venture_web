import React from'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    particalCanva: {
        position: "fixed"
    }
})


const Home=()=>{
    const classes = useStyles()
    return(
        <>
         <Navbar/>
         <Header/>
         <Particles
           canvasClassName= {classes.particalCanva}
           params={{
               particles:{
                  number:{
                      value: 30
                  } 
               }
           }}
         />
         
        </>
        

    );
}

export default Home;