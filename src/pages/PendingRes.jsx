import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from '@firebase/firestore';
import { db, auth } from '../services/config.js';
import { useSelector } from 'react-redux';

const PendingRes = () => {


    return (
        <div className='reviewsback'>

        </div>
    );
};

export default PendingRes;
