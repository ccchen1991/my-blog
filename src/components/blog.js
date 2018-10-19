import React, { Component } from 'react';
import BlogCard from './blogCard';

class Blog extends Component {
    componentDidMount() {
        this.props.fetchBlog();
    }

    render() {
        if (this.props.loading) {
            return (
                <div>Loading...</div>
            );
        } else if (this.props.error) {
            return (
                <div>{this.props.error.message}</div>
            );
        } else {
            return (
                this.props.blogList.map(blog => 
                    (blog.title && blog.body) && <BlogCard key={blog.id} blogData={blog} />
                )
            );
        }
    }
}

export default Blog;