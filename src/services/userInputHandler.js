import { db, auth } from "./config.js";
import { addDoc, collection } from 'firebase/firestore';

export const registerReservation = async (date, hour, name, ppl, phone, notes) => {
    try {
        const dataToAdd = {
            date: date,
            hour: hour,
            name: name,
            numberOfPeople: ppl,
            phoneNumber: phone,
            notes: notes,
            userEmail: auth.currentUser.email,
        };

        const docRef = await addDoc(collection(db, 'reservations'), dataToAdd);
        alert("Reservation request was successfully sent!");

    } catch (error) {
        alert("Error while sending the request... come back later");
        throw error;
    }

}

export const registerReview = async (rating, comm) => {
    try {
        const dataToAdd = {
            rating: rating,
            comment: comm,
            userEmail: auth.currentUser.email,
        };

        const docRef = await addDoc(collection(db, 'reviews'), dataToAdd);
        alert("Review was successfully sent!");

    } catch (error) {
        alert("Error while sending the review... come back later");
        throw error;
    }
}