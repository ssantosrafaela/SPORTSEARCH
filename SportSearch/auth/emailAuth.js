import {auth} from './firebaseConfig'
import {
    createdUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'

const emailLogin = async (email, password) =>{
    console.log(email, password, 'oi')
    console.log(typeof email)
    console.log(typeof password)
    signInWithEmailAndPassword(auth, email.trim(), password.trim())
    .then ((userCredential) =>{
        //Signed in 
        const user = userCredential.user;
        console.log(user)
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn(error)
            return null
        });
}
export{emailLogin}