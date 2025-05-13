import { useState } from 'react';

const Prova = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (count >= 0) {
            setCount(prev => prev - 1);
        }
    };

    return (
        <>
            <p>Count is {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
};

export default Prova;
