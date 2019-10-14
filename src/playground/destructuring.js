// const person = {
//     name: 'Shubham',
//     age: 20,
//     location: {
//         city: 'Allahabad',
//         temp: 24
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age} years old`);

// const { city, temp: temperature } = person.location;

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     name: 'Ego is the enmy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state] = address;

// console.log(`You are in ${city} in ${state}`); 

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ name, , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);