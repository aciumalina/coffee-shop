import React, { useState } from 'react';
import '../cssStyles/ReviewPage.css';
import { registerReview } from '../services/userInputHandler';
import { useNavigate } from 'react-router-dom';

const ReviewPage = () => {
    const navigate = useNavigate();

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmitReview = () => {
        registerReview(rating, comment);
        navigate("/ourreviews");

    };

    return (
        <div className='all-page'>
            <div className='container'>
                <h1>Write a Review for us</h1>
                <div>
                    <label>
                        Rating:
                        <select value={rating} onChange={(e) => handleRatingChange(Number(e.target.value))}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Write your review...
                        <textarea value={comment} onChange={handleCommentChange} />
                    </label>
                </div>
                <button className="button-review" onClick={handleSubmitReview}>Submit Review</button>
            </div>
        </div>

    );
};

export default ReviewPage;
