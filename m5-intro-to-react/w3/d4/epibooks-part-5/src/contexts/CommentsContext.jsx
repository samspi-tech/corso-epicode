import { createContext, useState } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState(null);

    const getComments = async asin => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTg0NDAsImV4cCI6MTc0Njk2ODA0MH0.z0Zh_N9h6X3zYClRoooiePAy2lthEZ1jEPAH6q3Dakg',
                    },
                },
            );
            const comments = await response.json();
            setComments(comments);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CommentsContext.Provider value={{ comments, getComments }}>
            {children}
        </CommentsContext.Provider>
    );
};
