import React, {useState, useEffect} from 'react'
import { makeStyles, 
        Grid, 
        Typography, 
        Button, 
        Container,
        Card, 
        CardContent,
        CardActions,
        CardActionArea,
        CardMedia,} from '@material-ui/core'
        
import { grey } from '@material-ui/core/colors';
import { motion, AnimatePresence } from 'framer-motion'

//TODO: Space evenly instead of 30 30.
const useStyles = makeStyles({
    cardRoot: {
        maxWidth: 500,
        marginLeft: 30,
        marginRight: 30,
        color: "#000",
        backgroundColor: grey[200]
    },
    media: {
        height: 260,
        width: 350
    },
    gridRoot: {
        padding: "20px",
        height: "100%",
        flexGrow: 1
    },
    fullHeight: {
        height: "100%"
    },
    bodyText: {
        color: grey[700]
    }
});

// Component that renders array of cards correctly for user to select
export default function CardHolder({deck, handleClick}) {
    const [showCards, setShowCards] = useState(true)
    const transitionTime = 0.5
    const classes = useStyles();

    const clickHandler = (card) => {
        setShowCards(false)
        setTimeout(() => { handleClick(card) }, transitionTime * 1000)
    }

    useEffect(() => {
        setShowCards(true)
    }, [deck])

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        transition: { duration: transitionTime }, 
    }

    return (
    <AnimatePresence exitBeforeEnter>
        {showCards && (
            <Grid container className={classes.gridRoot} spacing={0} alignItems="center" justify="center">
                <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <Grid item xs={12}>
                        <Container maxWidth={false} className={classes.fullHeight} >
                                <Grid container justify="center" spacing={5} className={classes.fullHeight} alignItems="center">
                                    {deck.map((card) => (
                                        <Grid item key={card.id}>
                                            <Card className={classes.cardRoot}>
                                                <CardActionArea onClick={() => clickHandler(card)}>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={card.image}
                                                            title={card.title}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5">
                                                                {card.title}
                                                            </Typography>
                                                            <Typography variant="body2" className={classes.bodyText}>
                                                                {card.body}
                                                            </Typography>
                                                        </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                        <Typography gutterBottom variant="body2">
                                                            Learn More
                                                        </Typography>
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                        </Container>
                    </Grid>
                </motion.div>
            </Grid>
        )} 
    </AnimatePresence>
    )
}
