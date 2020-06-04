import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCgyCCDfeo26kDYlL3iTkp4W7X7ldW-lCk',
    authDomain: 'react-eshop-1eaaf.firebaseapp.com',
    databaseURL: 'https://react-eshop-1eaaf.firebaseio.com',
    projectId: 'react-eshop-1eaaf',
    storageBucket: 'react-eshop-1eaaf.appspot.com',
    messagingSenderId: '371629805910',
    appId: '1:371629805910:web:a9f5d1610ed5fcc9e486f7',
    measurementId: 'G-TTYH8JH8TN'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
