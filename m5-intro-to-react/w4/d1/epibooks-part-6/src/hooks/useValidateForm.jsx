import { useState } from 'react';

export const useValidateForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setValidated(true);
    };

    return { validated, handleSubmit };
};
