import React from 'react'
import CardContainer from "./CardContainer"
import { makeStyles, 
        Grid, 
        TextField, 
        Typography, 
        Button, 
        ButtonBase,
        IconButton, 
        Card, 
        CardContent,
        CardActions,
        CardActionArea,
        CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
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
            <Grid container className={classes.flexGrow} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {deck.map((card) => (
                            <Grid item key={card.id}>
                                <Card className={classes.root}>
                                    <CardActionArea onClick={() => handleClick(card)}>
                                            {/* <CardMedia
                                            className={classes.media}
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            title="Contemplative Reptile"
                                        /> */}
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.text}
                                            </Typography>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                HEADER
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY
                                                BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY BODY
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

                            // <CardContainer   
                            //     key={card.id}
                            //     id={card.id}
                            //     text={card.text}
                            //     clicked={card.clicked}
                            //     handleClick={() => handleClick(card)}    
                            // />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
