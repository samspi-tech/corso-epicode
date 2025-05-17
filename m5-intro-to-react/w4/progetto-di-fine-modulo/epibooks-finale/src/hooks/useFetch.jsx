import { useState } from 'react';

export const useFetch = asin => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://epibooks.onrender.com/fantasy/${asin}`,
            );
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        data,
        getData,
        error,
        isLoading,
    };
};
