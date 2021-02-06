import tiger from "../images/tiger.jpg"
import bear from "../images/bear.jpg"
import elephant from "../images/elephant.jpg"
import crocodile from "../images/crocodile.jpg"
import giraffe from "../images/giraffe.jpg"
import whale from "../images/whale.jpg"
import shrimp from "../images/shrimp.jpg"
import fox from "../images/fox.jpg"
import octopus from "../images/octopus.jpg"
import wolf from "../images/wolf.jpg"
import cassowary from "../images/cassowary.jpg"
import chameleon from "../images/chameleon.jpg"
import jellyfish from "../images/jellyfish.jpg"
import peafowl from "../images/peafowl.jpg"
import spiderCrab from "../images/spiderCrab.jpg"
import horshoeCrab from "../images/horshoeCrab.jpg"
import mantis from "../images/mantis.jpg"
import platypus from "../images/platypus.jpg"
import falcon from "../images/falcon.jpg"
import elk from "../images/elk.jpg"

// Create array of objects to serve as deck.
export default function newDeck() {
    let deck = [
        {
            id: 0,
            image: tiger,
            title: "Siberian Tiger",
            body: "Siberian tigers live primarily in eastern Russia's birch forests, though some exist in China and North Korea.",
            link: "https://en.wikipedia.org/wiki/Siberian_tiger",
            clicked: false
        },
        {
            id: 1,
            image: bear,
            title: "Brown Bear",
            body: "The world's largest brown bears are found in coastal British Columbia and Alaska, and on islands such as Kodiak.",
            link: "https://en.wikipedia.org/wiki/Brown_bear",
            clicked: false
        },
        {
            id: 2,
            image: elephant,
            title: "African Bush Elephant",
            body: "Elephant family members show signs of grief and may revisit the bones of the deceased for years, touching them with their trunks.",
            link: "https://en.wikipedia.org/wiki/African_bush_elephant",
            clicked: false
        },
        {
            id: 3,
            image: crocodile,
            title: "Saltwater Crocodile",
            body: "A valve in the throat closes to keep crocs from drowning when they open their mouths underwater.",
            link: "https://en.wikipedia.org/wiki/Saltwater_crocodile",
            clicked: false
        },
        {
            id: 4,
            image: giraffe,
            title: "Northern Giraffe",
            body: "A giraffe's heart weighs about 25 pounds—it has to be that big to pump blood all the way to its brain.",
            link: "https://en.wikipedia.org/wiki/Northern_giraffe",
            clicked: false
        },
        {
            id: 5,
            image: whale,
            title: "Blue Whale",
            body: "Blue whales are the loudest animals on the planet—at 188 decibels, their cries can be louder than a jet engine.",
            link: "https://en.wikipedia.org/wiki/Blue_whale",
            clicked: false
        },
        {
            id: 6,
            image: shrimp,
            title: "Mantis Shrimp",
            body: "Mantis shrimps have powerful raptorials that are used to attack and kill prey either by spearing, stunning, or dismembering.",
            link: "https://en.wikipedia.org/wiki/Mantis_shrimp",
            clicked: false
        },
        {
            id: 7,
            image: fox,
            title: "Red Fox",
            body: "Red foxes live around the world in many diverse habitats including forests, grasslands, mountains, and deserts.",
            link: "https://en.wikipedia.org/wiki/Red_fox",
            clicked: false
        },
        {
            id: 8,
            image: octopus,
            title: "Mimic Octopus",
            body: "The lack of a rigid skeleton lets the mimic octopus and other octopuses contort themselves into amazing shapes.",
            link: "https://en.wikipedia.org/wiki/Mimic_octopus",
            clicked: false
        },
        {
            id: 9,
            image: wolf,
            title: "Gray Wolf",
            body: "A lone wolf howls to attract the attention of his pack, while communal howls may send territorial messages from one pack to another.",
            link: "https://en.wikipedia.org/wiki/Wolf",
            clicked: false
        },
        {
            id: 10,
            image: cassowary,
            title: "Cassowary",
            body: "Cassowaries are very wary of humans, but if provoked they are capable of inflicting serious, even fatal, injuries to both dogs and people.",
            link: "https://en.wikipedia.org/wiki/Cassowary",
            clicked: false
        },
        {
            id: 11,
            image: chameleon,
            title: "Veiled Chameleon",
            body: "Veiled chameleon eggs can undergo diapause, a period of suspended development. Warmer temperatures can reactivate growth.",
            link: "https://en.wikipedia.org/wiki/Veiled_chameleon",
            clicked: false
        },
        {
            id: 12,
            image: jellyfish,
            title: "Box Jellyfish",
            body: "Their venom is considered to be among the most deadly in the world, containing toxins that attack the heart, nervous system, and skin cells.",
            link: "https://en.wikipedia.org/wiki/Box_jellyfish",
            clicked: false
        },
        {
            id: 13,
            image: peafowl,
            title: "Peacock",
            body: "The term 'peacock' is commonly used to refer to birds of both sexes. Technically, only males are peacocks.",
            link: "https://en.wikipedia.org/wiki/Peafowl",
            clicked: false
        },
        {
            id: 14,
            image: spiderCrab,
            title: "Japanese Spider Crab",
            body: "The Japanese spider crab is not only the biggest crab, but its century-long lifespan may also make it the longest-lived.",
            link: "https://en.wikipedia.org/wiki/Japanese_spider_crab",
            clicked: false
        },
        {
            id: 15,
            image: horshoeCrab,
            title: "Atlantic Horseshoe Crab",
            body: "Horseshoe crab blood is bright blue. It contains important immune cells that are exceptionally sensitive to toxic bacteria.",
            link: "https://en.wikipedia.org/wiki/Horseshoe_crab",
            clicked: false
        },
        {
            id: 16,
            image: mantis,
            title: "Praying Mantis",
            body: "The praying mantis is named for its prominent front legs, which are bent and held together at an angle that suggests the position of prayer.",
            link: "https://en.wikipedia.org/wiki/Mantis",
            clicked: false
        },
        {
            id: 17,
            image: platypus,
            title: "Platypus",
            body: "Platypus reproduction is nearly unique. It is one of only two mammals (the echidna is the other) that lay eggs.",
            link: "https://en.wikipedia.org/wiki/Platypus",
            clicked: false
        },
        {
            id: 18,
            image: falcon,
            title: "Peregrine Falcon",
            body: "Peregrines hunt from above and, after sighting their prey, drop into a steep, swift dive that can top 200 miles an hour.",
            link: "https://en.wikipedia.org/wiki/Peregrine_falcon",
            clicked: false
        },
        {
            id: 19,
            image: elk,
            title: "Elk",
            body: "Bull elk lose their antlers each March, but they begin to grow them back in May in preparation for the late-summer breeding season.",
            link: "https://en.wikipedia.org/wiki/Elk",
            clicked: false
        },
    ]

    return deck
}

// Shuffles deck using Fisher–Yates algorithm
export function shuffleDeck(deck) {
    let currentIndex = deck.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }
  
    return deck;
}

// Draws first 3 cards from deck
export function drawThreeCards(deck) { return deck.slice(0, 3) }
