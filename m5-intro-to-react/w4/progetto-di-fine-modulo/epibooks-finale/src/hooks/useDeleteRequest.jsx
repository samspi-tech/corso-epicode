import { TOKEN } from '../token/token.js';

export const useDeleteRequest = (commentId, getComments, bookId) => {
    const deleteComment = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${TOKEN}`,
                    },
                },
            );
            return await response.json();
        } catch (error) {
            console.log(error.message);
        } finally {
            getComments(bookId);
        }
    };

    return {
        deleteComment,
    };
};
