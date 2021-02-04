import React from 'react'
import { makeStyles, 
        Typography, 
        AppBar, 
        Toolbar, 
        IconButton, } from '@material-ui/core'

import { grey } from '@material-ui/core/colors';
import { GitHub } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    gitIcon: {
        fontSize: "1.3em"
    },
    scaleEfect: {
        transition: "all 0.1s ease-in-out",
        "&:hover": {
        transform: "scale(1.2)"
        }
    },
    flexGrow: {
        flexGrow: 1, 
    },
    rightMargin: {
        marginRight: 10, 
    },
}));

// Component that displays the scoreboard above.
export default function Header({score, highScore}) {
    const classes = useStyles();
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Typography variant="h4" className={classes.flexGrow}>
                    Memory Game
                </Typography>

                <Typography variant="h6" className={classes.rightMargin}>
                    {`Score: ${score}`}
                </Typography>

                <Typography variant="h6" className={classes.rightMargin}>
                    {`High Score: ${highScore}`}
                </Typography>

                <IconButton 
                    className={classes.scaleEfect} 
                    color="inherit" 
                    aria-label="menu" 
                    target="_blank"
                    href="https://github.com/SasounTorossian"
                >
                    <GitHub className={classes.gitIcon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
