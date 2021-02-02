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

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 240,
        width: 400
    },
    flexGrow: {
        flexGrow: 1
    }
});

// Component that renders array of cards correctly for user to select
export default function CardHolder({deck, handleClick}) {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.flexGrow} spacing={0}>
                <Grid item xs={12}>
                    <Container maxWidth={false}>
                        <Grid container justify="center" spacing={3}>
                            {deck.map((card) => (
                                <Grid item key={card.id}>
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
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}
