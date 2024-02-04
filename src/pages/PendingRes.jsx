import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from '@firebase/firestore';
import { db } from '../services/config.js';
import '../cssStyles/PendingRes.css';

const ReservationsPage = () => {
    const [reservations, setReservations] = useState([]);

    const handleDismissReservation = async (reservationId) => {
        try {
            await deleteDoc(doc(db, 'reservations', reservationId));

            //reafisare rezervari fara rezervarea care tocmai a fost stearsa
            setReservations((prevReservations) =>
                prevReservations.filter((reservation) => reservation.id !== reservationId)
            );

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const reservationsCollection = collection(db, 'reservations');
                const querySnapshot = await getDocs(reservationsCollection);

                const reservationsData = [];
                querySnapshot.forEach((doc) => {
                    reservationsData.push({ id: doc.id, ...doc.data() });
                });

                setReservations(reservationsData);

            } catch (error) {
                console.log(error);
            }
        };

        fetchReservations();
    }, []);

    return (
        <div className="container">
            <h1 className="page-title">List of pending reservations</h1>

            <ul className="reservations-list">
                {reservations.map((reservation) => (
                    <li key={reservation.id} className="reservation-item">
                        <strong>Date of reservation:</strong> {reservation.date}<br />
                        <strong>Time:</strong> {reservation.hour}<br />
                        <strong>No. of people:</strong> {reservation.numberOfPeople}<br />
                        <strong>Name:</strong> {reservation.name}<br />
                        <strong>Phone no:</strong> {reservation.phoneNumber}<br />
                        <strong>Email:</strong> {reservation.userEmail}<br />
                        <strong>Notes:</strong> {reservation.notes}<br /><br />
                        <button onClick={() => handleDismissReservation(reservation.id)}>
                            Dismiss
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationsPage;

