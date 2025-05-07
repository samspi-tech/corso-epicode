import { useEffect, useState } from 'react';

export const usePostRequest = (bookId, getComments) => {
    const [payload, setPayload] = useState({
        rate: '',
        comment: '',
        elementId: '',
    });

    useEffect(() => {
        setPayload({
            ...payload,
            elementId: bookId,
        });
    }, [bookId]);

    const handleReview = e => {
        const { name, value } = e.target;

        setPayload({
            ...payload,
            [name]: value,
        });
    };

    const postComment = async e => {
        e.preventDefault();

        try {
            await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTM3OTQsImV4cCI6MTc0Njk2MzM5NH0.xH1d5jMXv-gwhcfqqkOyIEkc7ATGctmwnRvkYiUWpGo',
                },
            });
        } catch (error) {
            console.log(error);
        } finally {
            setPayload({
                rate: '',
                comment: '',
                elementId: bookId,
            });
            getComments(bookId);
        }
    };

    return {
        payload,
        postComment,
        handleReview,
    };
};
