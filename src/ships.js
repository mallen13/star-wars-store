import image from './images/ships/image.jpg';

//import all images
// const importAll = r => {
//     let images = {};
//     //remove the ./ and add image to images obj
//      r.keys().forEach( item => { images[item.replace('./', '')] = r(item); });
//     return images
//    }

// image object by calling custom importAll function
// args = context(directory, useSubDirectories bool, expression to search for)
// const images = importAll(require.context('./images/ships', false, /\.(png|jpe?g|svg)$/));

const ships = [
    {
        name: 'Ship name number 1',
        price: 50000000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim nec justo congue viverra. Donec volutpat turpis non nisl semper gravida. Phasellus mattis molestie posuere.',
        image: image
    },
    {
        name: 'ship name number 2',
        price: 50000400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim nec justo congue viverra. Donec volutpat turpis non nisl semper gravida. Phasellus mattis molestie posuere.',
        image: image
    },
    {
        name: 'shipe name number 3',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim nec justo congue viverra. Donec volutpat turpis non nisl semper gravida. Phasellus mattis molestie posuere.',
        image: image
    },
    {
        name: 'shipe name number 4',
        price: 10.8676,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim nec justo congue viverra. Donec volutpat turpis non nisl semper gravida. Phasellus mattis molestie posuere.',
        image: image
    },
    {
        name: 'shipe name number 5',
        price: 30000000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim nec justo congue viverra. Donec volutpat turpis non nisl semper gravida. Phasellus mattis molestie posuere.',
        image: image
    }
]

export default ships;