import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BlogAction from '../actions/blogAction';
import Blog from '../components/blog';

function mapStateToProps(state) {
    return {
        blogList: state.blogReducer.blogList,
        loading: state.blogReducer.loading,
        error: state.blogReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(BlogAction, dispatch);
}

const BlogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog);

export default BlogContainer;