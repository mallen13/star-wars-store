import cr90 from './images/ships/cr90-corvette.webp';
import sentinel from './images/ships/sentinel-landing-craft.webp';
import deathStar from './images/ships/death-star.webp';
import milleniumFalcon from './images/ships/millenium-falcon.webp';
import yWing from './images/ships/y-wing.webp';
import xWing from './images/ships/x-wing.webp';
import tieFighter from './images/ships/tie-fighter.webp';
import executor from './images/ships/executor.webp';
import starDestroyer from './images/ships/star-destroyer.webp';
import rebelTransport from './images/ships/rebel-transport.webp';

// //import all images
// const importAll = r => {
//     let images = {};
//     //remove the ./ and add image to images obj
//      r.keys().forEach( item => { images[item.replace('./', '')] = r(item); });
//     return images
// }

//image object by calling custom importAll function
//args = context(directory, useSubDirectories bool, expression to search for)
// const images = importAll(require.context('./images/ships', false, /\.(webp|png|jpe?g|svg)$/));

const ships = [
    {
        name: 'CR90 Corvette',
        price: 3500000,
        description: `This ship is a CR90 corvette manufactured by Corellian Engineering Corporation. It is 492 feet long
        and comes with a 2.0 hyperdrive rating. It can carry 6,615,000 pounds of cargo
        while carrying 30-165 crew and 600 passengers.`,
        image: cr90
    },
    {
        name: 'Star Destroyer',
        price: 150000000,
        description: `This ship is a Imperial I-class Star Destroyer manufactured by Kuat Drive Yards.
        It is 5,200 feet long and comes with a 2.0 hyperdrive rating. It can carry 79,380,000 pounds of cargo
        while carrying 47,060 crew.`,
        image: starDestroyer
    },
    {
        name: 'Sentinel-Class Landing Craft',
        price: 240000,
        description: `This ship is a Sentinel-class landing craft manufactured by Sienar Fleet Systems, 
        Cyngus Spaceworks. It is 124 feet long and comes with a 1.0 hyperdrive rating. It can carry 396,900 
        pounds of cargo while carrying 5 crew and 75 passengers.`,
        image: sentinel
    },
    {
        name: 'Death Star',
        price: 3000000000,
        description: `This ship is a DS-1 Orbital Battle Station manufactured by Imperial Department of 
        Military Research, Sienar Fleet Systems. It is 393,720 feet long and comes with a 4.0 hyperdrive 
        rating. It can carry 2,205,000,000,000 pounds of cargo while carrying 342,953 crew and 843,342 passengers.`,
        image: deathStar
    },
    {
        name: 'Millenium Falcon',
        price: 100000,
        description: `This ship is a YT-1300 light freighter manufactured by Corellian Engineering Corporation. 
        It is 112 feet long and comes with a 0.5 hyperdrive rating. It can carry 220500 pounds of cargo while 
        carrying 4 crew and 6 passengers.`,
        image: milleniumFalcon
    },
    {
        name: 'Y-wing',
        price: 134999,
        description: ` This ship is a BTL Y-wing manufactured by Koensayr Manufacturing. It is 45 feet long
        and comes with a 1.0 hyperdrive rating. It can carry 242 pounds of cargo while carrying 2 crew and 0 
        passengers.`,
        image: yWing
    },
    {
        name: 'X-wing',
        price: 15000,
        description: `This ship is a T-65 X-wing manufactured by Incom Corporation. It is 41 feet long
        and comes with a 1.0 hyperdrive rating. It can carry 242 pounds of cargo while carrying 1 crew 
        and 0 passengers.`,
        image: xWing
    },
    {
        name: 'TIE Fighter',
        price: 149999,
        description: `This ship is a Twin Ion Engine Advanced x1 manufactured by Sienar Fleet Systems. 
        It is 30 feet long and comes with a 1.0 hyperdrive rating. It can carry 330 pounds of cargo
        while carrying 1 crew and 0 passengers.`,
        image: tieFighter
    },
    {
        name: 'Executor',
        price: 1143350000,
        description: ` This ship is a Executor-class star dreadnought manufactured by Kuat Drive Yards, 
        Fondor Shipyards. It is 62,339 feet long and comes with a 2.0 hyperdrive rating. It can carry 
        551,250,000 pounds of cargo while carrying 279,144 crew and 38,000 passengers.`,
        image: executor
    },
    {
        name: 'Rebel Transport',
        price: 4000000,
        description: `This ship is a GR-75 medium transport manufactured by Gallofree Yards, Inc.. 
        It is 295 feet long and comes with a 4.0 hyperdrive rating. It can carry 41,895,000 pounds of cargo
        while carrying 6 crew and 90 passengers.`,
        image: rebelTransport
    },
]

export default ships;