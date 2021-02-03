import React from 'react'
import CardContainer from "./CardContainer"
import { makeStyles, 
        Grid, 
        TextField, 
        Typography, 
        Button, 
        Container,
        IconButton, 
        Card, 
        CardContent,
        CardActions,
        CardActionArea,
        CardMedia } from '@material-ui/core'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
});

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        // background: "#424242",
        // color: "#fff"
    },
    media: {
        height: 240,
        width: 300
    },
    flexGrow: {
        padding: "20px",
        height: "100%",
        flexGrow: 1
    },
    height: {
        height: "100%"
    }
});

// Component that renders array of cards correctly for user to select
export default function CardHolder({deck, handleClick}) {
    const classes = useStyles();

    return (
        <Grid container className={classes.flexGrow} spacing={0}>
            <Grid item xs={12}>
                <Container maxWidth={false} className={classes.height} >
                    <Grid container justify="center" spacing={5} className={classes.height} alignItems="center">
                        {deck.map((card) => (
                            <Grid item key={card.id}>
                                <ThemeProvider theme={darkTheme}>
                                    <Card className={classes.root}>
                                        <CardActionArea onClick={() => handleClick(card)}>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={card.image}
                                                    title={card.title}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {card.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {card.body}
                                                    </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </ThemeProvider>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}
