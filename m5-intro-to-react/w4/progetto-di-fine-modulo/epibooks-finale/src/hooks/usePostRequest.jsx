import { TOKEN } from '../token/token.js';
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
            const response = fetch(
                'https://striveschool-api.herokuapp.com/api/comments',
                {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${TOKEN}`,
                    },
                },
            );
            return await response.json();
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
