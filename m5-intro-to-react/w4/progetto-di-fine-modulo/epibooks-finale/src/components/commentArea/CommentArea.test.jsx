import { describe } from 'vitest';
import CommentArea from './CommentArea';
import { render } from '@testing-library/react';
import { SelectedProvider } from '../../contexts/SelectedContext';

describe('Test for CommentArea', () => {
    it('should test if CommentArea is rendered correctly', () => {
        render(
            <SelectedProvider>
                <CommentArea />
            </SelectedProvider>,
        );
    });
});
