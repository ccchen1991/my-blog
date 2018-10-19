const initState = {
    blogList: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'REQUEST_BLOG':
            return {
                ...state,
                loading: action.loading,
                blogList: []
            };
        case 'REQUEST_BLOG_SUCCESS':
            return {
                ...state,
                loading: action.loading,
                blogList: action.blogList
            };
        case 'REQUEST_BLOG_ERROR':
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        default:
            return state;
    }
}