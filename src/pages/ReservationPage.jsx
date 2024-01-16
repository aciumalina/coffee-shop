import React, { useState, useEffect } from 'react';
import '../cssStyles/ReservationPage.css';
import { registerReservation } from '../services/userInputHandler';
import { useNavigate } from "react-router-dom";

const ReservationPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        name: '',
        numberOfPeople: '',
        phoneNumber: '',
        notes: '',
    });

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        const currentTime = new Date().toTimeString().slice(0, 5);

        document.getElementById('datePicker').min = currentDate;
        document.getElementById('timePicker').min = currentTime;

        setFormData({
            date: currentDate,
            time: currentTime,
            name: '',
            numberOfPeople: '',
            phoneNumber: '',
            notes: '',
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerReservation(formData.date, formData.time, formData.name, formData.numberOfPeople, formData.phoneNumber, formData.notes);
            navigate("/");
        }
        catch (err) {
            //nimic
        }

    };

    const generateTimeOptions = () => {
        const options = [];

        for (let hour = 7; hour <= 22; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const formattedHour = hour.toString().padStart(2, '0');
                const formattedMinute = minute.toString().padStart(2, '0');
                options.push(`${formattedHour}:${formattedMinute}`);
            }
        }

        return options;
    };


    return (
        <div className='reservation-page'>
            <div className='reservation-container'>
                <h2>Make a reservation with us</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            id="datePicker"
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Time:
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            id="timePicker"
                            required
                        >
                            <option value="">Select a time</option>
                            {generateTimeOptions().map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br />

                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        No. of people:
                        <input
                            type="number"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Phone Number:
                        <input
                            type="tel"
                            name="phoneNumber"
                            pattern="[0-9]{10}"
                            maxLength="10"

                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Additional notes:
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />

                    <button type="submit">Send the reservation request</button>
                </form>
            </div>
        </div>

    );
};

export default ReservationPage;
