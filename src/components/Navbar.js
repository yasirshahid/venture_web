import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer"


import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box,
ListItemIcon
} from "@material-ui/core"
import {

AssignmentInd,
Home,
Apps,
ContactMail,
MenuOpen
} from "@material-ui/icons"
import logoVenture4 from "../logoVenture4.png"

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#9C27B0",
        height:"100rem"

    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    listItem:{
        color: "#F0F3F4 "
    }
}));

const menuItems =[
    {
        listIcon: <Home/>,
        listText:"Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText:"Services"
    },
    {
        listIcon: <Apps/>,
        listText:"Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText:"Contacts"
    },
   
]


const Navbar = () => {
    const [state,setState]= useState({
        right:false
    })

const toggleSlider = (slider, open) => () => {
    setState({...state,[slider]: open});
};
    const classes = useStyles();

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider,false)}
        >
          <Avatar className={classes.avatar} src={logoVenture4} alt="Venture"/>
          <Divider/>
          <List>
            {menuItems.map((lsItem,key)=>(
                <ListItem button key={key}>
                  <ListItemIcon className={classes.listItem}>
                      {lsItem.listIcon} 
                  </ListItemIcon>
                <ListItemText 
                  className={classes.listItem} 
                  primary={lsItem.listText}
                />
                </ListItem>
            ))}
            
          </List>

        </Box>

    );
        
    return(
        <>
        
        <Box component="nav">
            <AppBar position="static" style={{background: "#283747"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <MenuOpen style={{color:"#F0F3F4"}}/>
                    </IconButton>
                    <Typography style={{color:"#F0F3F4"}}  variant="h5">
                        Portfolio
                    </Typography>
                    <MobilRightMenuSlider 
                    anchor="right" 
                    open={state.right}
                    onClose={toggleSlider("right",false)}>
                    
                      {sideList("right")}  
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>

        </Box>
        </>
    )
}

export default Navbar;