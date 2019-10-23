import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default};

// //child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value',
//         (snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             });
//             console.log(expenses);
//         });

// const expenses = [{
//     description: 'Rent',
//     amount: 195000,
//     note: 'Just a note',
//     createdAt: 100
// },{
//     description: 'Coffee',
//     amount: 2000,
//     note: 'Morning Coffee',
//     createdAt: 1200
// },{
//     description: 'Gas Bill',
//     amount: 19500,
//     note: 'This months gas bill',
//     createdAt: 10000
// }
// ];

// expenses.forEach((expense) => {
//     database.ref('expenses').push(expense);
// })

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });

// database.ref().on('value', (snapshot) => {
//     const { name, location: {city}, job: {title} } = snapshot.val();
//     console.log(`${name} is a ${title} at ${city}`);
// });

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref().once('value').then(((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })).catch((e) => {
//     console.log('Error fetching data', e);
// });

// database.ref().set({
//     name: 'SKJ',
//     age: 20,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Allahabad',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Bangaluru'
// });

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('isSingle successfully removed');
// }).catch((e) => {
//     console.log('Error occured while removing isSingle', e);
// });