import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Avatar,Grid,Box } from "@material-ui/core";
import Typed from "react-typed";
import yasirProfile from "../yasirProfile.png";
import { CompassCalibrationRounded } from "@material-ui/icons";

// CSS styles

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),

    },
    title:{
       color: "tomato",
       fontFamily: "'Baloo 2', cursive;" 
    },
    subTitle: {
        color: "tan",
        marginBottom: "3rem",
        fontFamily: "'Baloo 2', cursive;"
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
                <Avatar className={classes.avatar} src={yasirProfile} alt="Yasir shahid"/>   
            </Grid>
            <Typography className={classes.title}  variant="h4">
                <Typed strings={["Yasir Shahid"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subTitle}  variant="h4">
                <Typed strings={["Design & Animation","Web Development","MERN Stack"]} 
                typeSpeed={40}
                backSpeed={60}
                loop/>
            </Typography>
        </Box>

    );
};

export default Header;