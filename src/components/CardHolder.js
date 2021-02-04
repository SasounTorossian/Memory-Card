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

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { motion, AnimatePresence } from 'framer-motion'

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
});

const useStyles = makeStyles({
    cardRoot: {
        maxWidth: 500,
        marginLeft: 30,
        marginRight: 30,
    },
    media: {
        height: 260,
        width: 350
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
            <Grid container className={classes.flexGrow} spacing={0} alignItems="center" justify="center">
                <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <Grid item xs={12}>
                        <Container maxWidth={false} className={classes.height} >
                                <Grid container justify="center" spacing={5} className={classes.height} alignItems="center">
                                    {deck.map((card) => (
                                        <Grid item key={card.id}>
                                            <ThemeProvider theme={darkTheme}>
                                                <Card className={classes.cardRoot}>
                                                    <CardActionArea onClick={() => clickHandler(card)}>
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
                </motion.div>
            </Grid>
        )} 
    </AnimatePresence>
    )
}
