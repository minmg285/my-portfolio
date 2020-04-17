import React from "react";
import NavBar from "./navBar";
import Header from "./header";
import Particles from "react-particles-js";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",

    }
})
const Home = () => {
    const classes = useStyles();
    return (
        <>
            
            <NavBar />
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
                                color: "#dbdbdb"
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