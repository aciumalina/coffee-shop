import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from '@firebase/firestore';
import { db, auth } from '../services/config.js';
import { useSelector } from 'react-redux';
import '../cssStyles/OurReviewsPage.css'

const OurReviewsPage = () => {
    const [reviews, setReviews] = useState([]);

    const isAdmin = useSelector((state) => state.auth.isAdmin);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewsCollection = collection(db, 'reviews');
                const querySnapshot = await getDocs(reviewsCollection);

                const reviewsData = [];
                querySnapshot.forEach((doc) => {
                    reviewsData.push({ id: doc.id, ...doc.data() });
                });

                setReviews(reviewsData);
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };

        fetchReviews();
    }, []);

    const handleDeleteReview = async (reviewId) => {
        try {
            await deleteDoc(doc(db, 'reviews', reviewId));
            setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
        } catch (error) {
            console.error('Error deleting the reviews:', error);
        }
    };


    return (
        <div className='reviewsback'>
            <div className="review-container">
                <h1>Our honest, unfiltered reviews</h1>
                <div className="review">

                    <ul>
                        {reviews.map((review) => (
                            <li key={review.id} className="review-item">
                                <strong>{review.userEmail}</strong> Given rating: {review.rating}
                                <p>{review.comment}</p>
                                {auth.currentUser ? (
                                    (auth.currentUser.email === review.userEmail || isAdmin) && (
                                        <button className='redbtn' onClick={() => handleDeleteReview(review.id)}>
                                            Delete review
                                        </button>
                                    )
                                ) : (
                                    null
                                )}
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OurReviewsPage;
