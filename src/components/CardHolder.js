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
        height: 140,
    },
    });

// Component that renders array of cards correctly for user to select
export default function CardHolder({deck, handleClick}) {
    const classes = useStyles();

    return (
        <div>
            {console.log(deck)}
            {deck.map((card) => (
                <Card className={classes.root} key={card.id} >
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

                // <CardContainer   
                //     key={card.id}
                //     id={card.id}
                //     text={card.text}
                //     clicked={card.clicked}
                //     handleClick={() => handleClick(card)}    
                // />
            ))}
        </div>
    )
}
