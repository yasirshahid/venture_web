import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Avatar,Grid,Box } from "@material-ui/core";
import Typed from "react-typed";
import logoVenture from "../logoVenture.png";


// CSS styles

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),

    },
    title:{
       color: "#9C27B0",
       fontFamily: "'Comfortaa', cursive;" 
    },
    subTitle: {
        color: "#9E9E9E ",
        marginBottom: "3rem",
        fontFamily: "'Comfortaa', cursive;"
    },
    typedContainer:{
        position:"absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex:1
    }
}));
const Header = () => {
    const classes = useStyles();
    return(
        <Box className={classes.typedContainer}>
            <Grid container justify ="center">
                <Avatar className={classes.avatar} src={logoVenture} alt="Venture"/>   
            </Grid>
            <Typography className={classes.title}  variant="h5">
                <Typed strings={["Venture","We Inspire to CHANGE","We champion CREATIVITY!!!"]} typeSpeed={50} backSpeed={20}
                loop/>
            </Typography>
            
            <Typography className={classes.subTitle}  variant="h3">
                <Typed strings={["Social Media","Web Development","Graphics Design","Animation","Production"]} 
                typeSpeed={20}
                backSpeed={200}
                // backDelay={1}
                fadeOut
                cursorChar= {"."}
                loop/>
            </Typography>
        </Box>

    );
};

export default Header;