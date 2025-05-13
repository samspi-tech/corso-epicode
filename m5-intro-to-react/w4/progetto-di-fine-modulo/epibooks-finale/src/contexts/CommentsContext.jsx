import { createContext, useState } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
    const [error, setError] = useState('');
    const [comments, setComments] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getComments = async asin => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTg0NDAsImV4cCI6MTc0Njk2ODA0MH0.z0Zh_N9h6X3zYClRoooiePAy2lthEZ1jEPAH6q3Dakg',
                    },
                }
            );
            const comments = await response.json();
            setComments(comments);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <CommentsContext.Provider
            value={{
                error,
                isLoading,
                setIsLoading,
                comments,
                getComments,
                setComments,
            }}
        >
            {children}
        </CommentsContext.Provider>
    );
};
