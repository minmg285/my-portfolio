import React from "react";
import {
    Typography,Avatar,Grid,Box
} from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>({
    avatar :{
        width : theme.spacing(15),
        height : theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#f08a5d"
    },
    subTitle : {
        color: "#f08a5d",
        marginBottom: "3rem"
    },
    typedContainer : {
        position : "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
        
    }
}))
const Header = () =>{
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar src ={avatar} alt="min thiha maung" className={classes.avatar}/>
            </Grid>
            
            <Typography className={classes.title} variant="h4">
                Tony Maung
            </Typography>
            
            <br/>
            <Typography className={classes.subTitle} variant="h6">
                <Typed strings={["Full-stack Javascript Developer","UI Engineer","IoT Developer"]} typeSpeed={60} loop/>
            </Typography>
        </Box>
    )
}

export default Header;