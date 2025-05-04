import './commentArea.css';
import { useContext } from 'react';
import { NotebookPen } from 'lucide-react';
import CommentsForm from './partials/commentsForm/CommentsForm.jsx';
import CommentsList from './partials/commentsList/CommentsList.jsx';
import { SelectedContext } from '../../contexts/SelectedContext.jsx';

const CommentArea = () => {
    const { selected } = useContext(SelectedContext);

    return (
        <div className="comment-area-container pe-3">
            <h4 className="comment-area-info pt-5 mb-3 d-flex gap-3">
                <span className="mt-2">
                    <NotebookPen size={40} />
                </span>
                <span className="border-bottom border-2 pb-1">
                    Click on any book to see its comments or to add one.
                </span>
            </h4>
            {selected && <CommentsForm book={selected} />}
            {selected && <CommentsList book={selected} />}
        </div>
    );
};

export default CommentArea;
