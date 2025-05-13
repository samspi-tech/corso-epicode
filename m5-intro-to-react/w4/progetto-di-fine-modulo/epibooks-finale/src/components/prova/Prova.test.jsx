import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect } from 'vitest';
import Prova from './Prova';

describe('Test for Prova', () => {
    it('should test if count is zero', () => {
        render(<Prova />);
        screen.getByText('Count is 0');
    });

    it('should test if count is increased by one', () => {
        render(<Prova />);

        const count = screen.getByText('Count is 0');
        const handleIncrement = screen.getByText('Increment');

        fireEvent.click(handleIncrement);

        expect(count).toHaveTextContent('Count is 1');
    });

    it('should test if count is decreased by one', () => {
        render(<Prova />);

        const count = screen.getByText('Count is 0');
        const handleIncrement = screen.getByText('Increment');
        const handleDecrement = screen.getByText('Decrement');

        fireEvent.click(handleIncrement);
        fireEvent.click(handleIncrement);
        fireEvent.click(handleDecrement);

        expect(count).toHaveTextContent('Count is 1');
    });
});
