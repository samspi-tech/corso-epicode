import { useEffect, useState } from 'react';

export const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [url]);

    return {
        data,
        error,
        isLoading,
    };
};
