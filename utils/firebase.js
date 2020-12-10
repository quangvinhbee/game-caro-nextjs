import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_APIKEY;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECTID;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APPID;
const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
const authDomain = process.env.NEXT_PUBLIC_AUTHDOMAIN

var firebaseConfig = {
    apiKey: `${apiKey}`,
    authDomain: `${authDomain}`,
    databaseURL: `https://caronextjs-default-rtdb.firebaseio.com`,
    projectId: `${projectId}`,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: `${messagingSenderId}`,
    appId: `${appId}`,
    measurementId: `${measurementId}`
};
if (firebase.app.length) {
    try {
        firebase.initializeApp(firebaseConfig)
    } catch (error) {
    }
}
const data = firebase.database().ref('/Caro')

export const setTable_Firebase = (table, idRoom) => {
    if (idRoom !== undefined && idRoom !== null) {
        data
            .child(idRoom).child('TABLE')
            .set(table)
            .catch((err) => { alert(err) })
    }
}
export const setStatus_Firebase = (Room, idRoom) => {
    if (idRoom !== undefined && idRoom !== null) {
        data
            .child(idRoom).child('STATUS')
            .set(Room)
            .catch((err) => { alert(err) })
    }
}
export function getTable_Firebase(idRoom) {
    if (idRoom !== undefined && idRoom !== null) {
        return data.child(`${idRoom}`).child('TABLE').once('value').then((snapshot) => {
            return snapshot.val()
        }).catch((err) => { console.log(err) })
    }
}
export function getStatus_Firebase(idRoom) {
    if (idRoom !== undefined && idRoom !== null) {
        return data.child(`${idRoom}`).child('STATUS').once('value').then((snapshot) => {
            return snapshot.val()
        }).catch((err) => { console.log(err) })
    }
}

export function getRoom_Firebase(idRoom) {
    if (idRoom !== undefined && idRoom !== null) {
        return data.child(`${idRoom}`).once('value').then((snapshot) => {
            return snapshot.val()
        }).catch((err) => { console.log(err) })
    }
}






//------------------------------------------------------------------------------------








export const createData = (room, idRoom) => {
    data
        .child(idRoom)
        .set(room)
        .catch((err) => { alert(err) })
}
export function fetchData() {
    return data.once('value').then((snapshot) => {
        return snapshot.val()
    }).catch((err) => { console.log(err) })
}
export function removeRoom(ID) {
    data.child(ID).remove();
}

export function deleteData(id) {
    data.child(id).remove();
}

