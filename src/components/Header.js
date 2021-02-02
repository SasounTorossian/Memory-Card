import React from 'react'
import { makeStyles, 
        Typography, 
        AppBar, 
        Toolbar, 
        IconButton, 
        Menu, 
        MenuItem, 
        ListItemIcon  
  } from '@material-ui/core'

  import { GitHub } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gitButton: {
        marginRight: theme.spacing(2),
    },
    menuIcon: {
        fontSize: "1.6em"
    },
    gitIcon: {
        fontSize: "1.3em"
    },
    scaleEfect: {
        transition: "all 0.2s ease-in-out",
        "&:hover": {
        transform: "scale(1.1)"
        }
    },
    title: {
        flexGrow: 1, 
    },
}));

// Component that displays the scoreboard above.
export default function Header({score, highScore}) {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Memory Game
                    </Typography>

                    <IconButton 
                        className={`${classes.gitButton} ${classes.scaleEfect}`}
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        target="_blank"
                        href="https://github.com/SasounTorossian"
                    >
                        <GitHub className={classes.gitIcon}/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        {`Score: ${score}`}
                    </Typography>

                    <Typography variant="h6" className={classes.title}>
                        {`High Score: ${highScore}`}
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}
