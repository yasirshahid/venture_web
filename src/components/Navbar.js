import React from 'react'
import { makeStyles } from "@material-ui/core/styles";


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
import avatar from "../avatar.png"

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#2554C7",
        height:"30rem"

    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color: "#E5E4E2"
    }
}));

const menuItems =[
    {
        listIcon: <Home/>,
        listText:"Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText:"Resume"
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
    const classes = useStyles()
    return(
        <>
        <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.avatar} src={avatar} alt="Yasir shahid"/>
        <Divider/>
        <List>
            {menuItems.map((lsItem,key)=>(
                <ListItem button key={key}>
                <ListItemIcon className={classes.listItem}>{lsItem.listIcon} </ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText}/>
            </ListItem>
            ))}
            
        </List>

        </Box>
        <Box component="nav">
            <AppBar position="static" style={{background: "#7D0552"}}>
                <Toolbar>
                    <IconButton>
                        <MenuOpen style={{color:"#E5E4E2"}}/>
                    </IconButton>
                    <Typography style={{color:"#E5E4E2"}}  variant="h5">
                        Venture
                    </Typography>
                </Toolbar>
            </AppBar>

        </Box>
        </>
    )
}

export default Navbar;