import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyAw9pehE5_uU3yexHR6fMSHqfKjkwCrT0o",
    authDomain: "react-redux-router-85f3c.firebaseapp.com",
    databaseURL: "https://react-redux-router-85f3c.firebaseio.com",
    projectId: "react-redux-router-85f3c",
    storageBucket: "react-redux-router-85f3c.appspot.com",
    messagingSenderId: "1055664854652",
    appId: "1:1055664854652:web:e75ce2e8522d5cb5645bf9",
    measurementId: "G-PQFH3WGX7B"
};
if (firebase.app.length) {
    try {
        firebase.initializeApp(firebaseConfig)
    } catch (error) {
    }
}
const data = firebase.database().ref('Caro/ROOM')
export const setRoom = (room) => {
    data
        .child(room.ROOMID)
        .set(room)
        .catch((err) => { alert(err) })
}

export const createData = (room) => {
    data
        .child(room.ROOMID)
        .set(room)
        .catch((err) => { alert(err) })
}
export function fetchData(ID) {
    return data.child(ID).once('value').then((snapshot) => {
        return snapshot.val()
    }).catch((err) => { console.log(err) })
}
export function removeRoom(ID) {
    data.child(ID).remove();
}

export function deleteData(id) {
    data.child(id).remove();
}

