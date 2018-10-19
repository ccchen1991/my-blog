export const requestBlog = () => {
    return {
        type: 'REQUEST_BLOG',
        loading: true,
        error: null
    }
}

export const requestBlogSuccess = (blogList) => {
    return {
        type: 'REQUEST_BLOG_SUCCESS',
        blogList,
        loading: false,
        error: null
    }
}

export const requestBlogError = (error) => {
    return {
        type: 'REQUEST_BLOG_ERROR',
        loading: false,
        blogList: [],
        error
    }
}

export const fetchBlog = () => {
    return function (dispatch) {
        dispatch(requestBlog());

        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('404');
                }
            )
            .then(json =>
                dispatch(requestBlogSuccess(json))
            ).catch(error => {
                console.error(error);
                dispatch(requestBlogError(error))
            });
    }
}