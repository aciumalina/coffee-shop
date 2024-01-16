import { auth } from './config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const handleSignup = async (email, password, onSuccess) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("user registered");

        //apel callback suscces
        onSuccess(user);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const handleLogin = async (email, password, onSuccess) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed in ");

        //callback pentru success
        onSuccess(user);
    } catch (error) {
        console.log(error.message);
        throw error;

    }
}

export const logout = async () => {
    try {

        await signOut(auth);
    }
    catch (error) {
        throw error;
    }
}
