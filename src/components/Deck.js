import tiger from "../images/tiger.jpg"
import bear from "../images/bear.jpg"
import elephant from "../images/elephant.jpg"
import crocodile from "../images/crocodile.jpg"
import giraffe from "../images/giraffe.jpg"
import whale from "../images/whale.jpg"
import shrimp from "../images/shrimp.jpg"
import fox from "../images/fox.jpg"

// Create array of objects to serve as deck.
export default function newDeck() {
    let deck = [
        {
            id: 0,
            image: tiger,
            title: "Siberian Tiger",
            body: "The Siberian tiger is a tiger from a specific population of the Panthera tigris tigris subspecies native to the Russian Far East, Northeast China, and possibly North Korea. It once ranged throughout the Korean Peninsula, north China, and eastern Mongolia.",
            link: "https://en.wikipedia.org/wiki/Siberian_tiger",
            clicked: false
        },
        {
            id: 1,
            image: bear,
            title: "Brown Bear",
            body: "The brown bear (Ursus arctos) is a large bear species found across Eurasia and North America. In North America, the populations of brown bears are called grizzly bears. It is one of the largest living terrestrial members of the order Carnivora, rivaled in size only by its closest relative, the polar bear (Ursus maritimus), which is much less variable in size and slightly bigger on average.",
            link: "https://en.wikipedia.org/wiki/Brown_bear",
            clicked: false
        },
        {
            // Best size
            id: 2,
            image: elephant,
            title: "African Bush Elephant",
            body: "The African bush elephant (Loxodonta africana), also known as the African savanna elephant, is the largest living terrestrial animal, with bulls reaching a shoulder height of up to 3.96 m (13.0 ft) and a body mass of up to 10.4 t (11.5 short tons).",
            link: "https://en.wikipedia.org/wiki/African_bush_elephant",
            clicked: false
        },
        {
            id: 3,
            image: crocodile,
            title: "Saltwater Crocodile",
            body: "The saltwater crocodile (Crocodylus porosus) is a crocodilian native to saltwater habitats and brackish wetlands from India's east coast across Southeast Asia and the Sundaic region to northern Australia and Micronesia. It is regarded as dangerous for people who share the same environment.",
            link: "https://en.wikipedia.org/wiki/Saltwater_crocodile",
            clicked: false
        },
        {
            // Best size
            id: 4,
            image: giraffe,
            title: "Northern Giraffe",
            body: "The northern giraffe (Giraffa camelopardalis), also known as three-horned giraffe, is the type species of giraffe native to North Africa. Once abundant throughout Africa since the 19th century, it ranged from Senegal, Mali and Nigeria from West Africa to up north in Egypt.",
            iink: "https://en.wikipedia.org/wiki/Northern_giraffe",
            clicked: false
        },
        {
            id: 5,
            image: whale,
            title: "Blue Whale",
            body: "The blue whale (Balaenoptera musculus) is a marine mammal belonging to the baleen whale suborder Mysticeti. Reaching a maximum confirmed length of 29.9 meters (98 feet) and weight of 173 tonnes (190 tons), it is the largest animal known to have ever existed. The blue whale’s long and slender body can be various shades of grayish-blue dorsally and somewhat lighter underneath.",
            link: "https://en.wikipedia.org/wiki/Blue_whale",
            clicked: false
        },
        {
            id: 6,
            image: shrimp,
            title: "Mantis Shrimp",
            body: "Mantis shrimps, called 'sea locusts' by ancient Assyrians, 'prawn killers' in Australia, and now sometimes referred to as 'thumb splitters' — because of the animal's ability to inflict painful wounds if handled incautiously — mantis shrimps have powerful raptorials that are used to attack and kill prey either by spearing, stunning, or dismembering.",
            link: "https://en.wikipedia.org/wiki/Mantis_shrimp",
            clicked: false
        },
        {
            id: 7,
            image: fox,
            title: "Red Fox",
            body: "The red fox (Vulpes vulpes) is the largest of the true foxes and one of the most widely distributed members of the order Carnivora, being present across the entire Northern Hemisphere including most of North America, Europe and Asia, plus parts of North Africa.",
            link: "https://en.wikipedia.org/wiki/Red_fox",
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
