import { useState } from 'react';

export const usePutRequest = (bookId, getComments, userComment) => {
    const { _id: id, comment, rate } = userComment;
    const [isEdit, setIsEdit] = useState(false);
    const [editedComment, setEditedComment] = useState({
        rate: '',
        comment: '',
        elementId: '',
    });

    const handleEditedComment = e => {
        const { name, value } = e.target;

        setEditedComment({
            ...editedComment,
            elementId: bookId,
            [name]: String(value),
        });
    };

    const handleEditStatus = () => {
        setIsEdit(!isEdit);

        setEditedComment({
            comment: comment,
            elementId: bookId,
            rate: String(rate),
        });
    };

    const editComment = async e => {
        e.preventDefault();

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(editedComment),
                    headers: {
                        'Content-type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTg0NDAsImV4cCI6MTc0Njk2ODA0MH0.z0Zh_N9h6X3zYClRoooiePAy2lthEZ1jEPAH6q3Dakg',
                    },
                },
            );
            return await response.json();
        } catch (error) {
            console.log(error);
        } finally {
            getComments(bookId);
            setIsEdit(false);
        }
    };

    return {
        isEdit,
        editComment,
        handleEditStatus,
        handleEditedComment,
    };
};
