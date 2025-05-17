import './commentArea.css';
import { useContext } from 'react';
import { Info } from 'lucide-react';
import CommentsForm from './partials/commentsForm/CommentsForm.jsx';
import CommentsList from './partials/commentsList/CommentsList.jsx';
import { SelectedContext } from '../../contexts/SelectedContext.jsx';

const CommentArea = ({ isTitleVisible }) => {
    const { selected } = useContext(SelectedContext);

    return (
        <div
            data-testid="commentsSection"
            className="comment-area-container rounded px-3 py-4"
        >
            {isTitleVisible && (
                <h5 className="comment-area-info d-flex align-items-center gap-3">
                    <span>
                        <Info size={30} />
                    </span>
                    Click on any book to see its comments or to add one.
                </h5>
            )}
            {selected && <CommentsForm book={selected} />}
            {selected && (
                <CommentsList book={selected} isTitleVisible={isTitleVisible} />
            )}
        </div>
    );
};

export default CommentArea;
