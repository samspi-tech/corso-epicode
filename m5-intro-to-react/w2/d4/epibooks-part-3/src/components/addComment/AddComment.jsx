import './addComment.css';
import Rating from './partials/Rating.jsx';
import { useEffect, useState } from 'react';
import Comment from './partials/Comment.jsx';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({ bookId }) => {
    const [review, setReview] = useState({
        comment: '',
        rate: '',
        elementId: '',
    });

    useEffect(() => {
        setReview({
            ...review,
            elementId: bookId,
        });
    }, [bookId]);

    const handleReview = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value,
        });
    };

    const addComment = async e => {
        e.preventDefault();

        try {
            await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(review),
                headers: {
                    'Content-type': 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTM3OTQsImV4cCI6MTc0Njk2MzM5NH0.xH1d5jMXv-gwhcfqqkOyIEkc7ATGctmwnRvkYiUWpGo',
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form onSubmit={addComment} className="d-flex flex-column">
            <Comment comment={review.comment} onTyping={handleReview} />
            <div className="d-flex">
                <Rating rate={review.rate} onTyping={handleReview} />
                <Button type="submit" variant="danger" className="ms-auto">
                    Post
                </Button>
            </div>
        </Form>
    );
};

export default AddComment;
