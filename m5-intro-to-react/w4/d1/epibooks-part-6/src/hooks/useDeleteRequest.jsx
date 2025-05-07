export const useDeleteRequest = (commentId, getComments, bookId) => {
    const deleteComment = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTg0NDAsImV4cCI6MTc0Njk2ODA0MH0.z0Zh_N9h6X3zYClRoooiePAy2lthEZ1jEPAH6q3Dakg',
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
