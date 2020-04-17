import React,{useState} from "react";
import MobileRightMenuSlider from "@material-ui/core/Drawer"

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
// eslint-disable-next-line
import {makeStyles} from "@material-ui/core/styles";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    Block
} from "@material-ui/icons";
import profilePic from "../avatar.png";
//CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer : {
        width: 250 ,
        background: "#b83b5e",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem : {
        color: "#f9ed69"
    }
}));
const MenuItems= [
    {
        listIcon : <Home />,
        listText : "Home"
    },
    {
        listIcon : <AssignmentInd />,
        listText : "Resume"
    },
    {
        listIcon : <Apps />,
        listText : 'Portfolio'
    },
    {
        listIcon : <ContactMail />,
        listText : "Contact"
    }
];

    
        
    

const NavBar = () => {
    const [state,setState] = useState({
        right: false
    });
    const toggleList = (slider,open) => ()=>{
        setState({...state,[slider]:open});
    };
    
    const classes = useStyles();
    const sideList = slider =>(
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleList(slider,false)}>
                <Avatar className={classes.avatar} src={profilePic} alt="min-thiha-mg"/>
                <Divider />
                <List>
                    {MenuItems.map((lsItem,key)=>(
                        <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                        </ListItem>
                    ))}
                    
                </List>
            </Box>
    )
    return ( 
        <>
        
         <Box component="nav">
            <AppBar position="static" style={{background:"#6a2c70"}}>
                <Toolbar>
                    <IconButton onClick= {toggleList("right",true)}>
                        <ArrowBack style={{color: "#b83b5e"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "#f9ed69"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider anchor="left" open={state.right} onClose={toggleList("right",false)}>
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
       
    )
}

export default NavBar;
