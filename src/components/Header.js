import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Avatar,Grid,Box } from "@material-ui/core";
import Typed from "react-typed";
import yasirProfile from "../yasirProfile.png";

// CSS styles

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),

    }
}));
const Header = () => {
    const classes = useStyles();
    return(
        <Box>
            <Avatar className={classes.avatar} src={yasirProfile} alt="Yasir shahid"/>
            <Typography  variant="h4">
                <Typed strings={["Yasir Shahid"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography  variant="h4">
                <Typed strings={["Design & Animation","Web Development","MERN Stack"]} 
                typeSpeed={40}
                backSpeed={60}
                loop/>
            </Typography>
        </Box>

    );
};

export default Header;