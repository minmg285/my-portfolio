import React from "react";
import NavBar from "./navBar";
import Header from "./header";
import Particles from "react-particles-js";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: 0.6

    }
})
const Home = () => {
    const classes = useStyles();
    return (
        <>
            
            <NavBar title= "Home"/>
            <Header />
            <Particles canvasClassName = {classes.particlesCanva}
                params ={{
                    particles:{
                        number: {
                            value : 60,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape : {
                            type: "circle",
                            stroke: {
                                width :1 ,
                                color: "#B83B5E"
                            }
                        },
                        size: {
                            value : 8 ,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity:{
                            value:1,
                            random: true,
                            anim:{
                                enable: true,
                                speed:1,
                                opacity_min: 0.1,
                                sync: true

                            }
                        }

                    }
                }

                }
            />
        </>
    )
}

export default Home;