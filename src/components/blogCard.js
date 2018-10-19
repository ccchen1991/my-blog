import React, { Component } from 'react';

class BlogCard extends Component {
    render() {
        const cardsStyle = {
            width: "100%"
        };
        return (
            <div className='ui card' style={cardsStyle}>
                <div className='content'>
                    <div className='header' >
                        <p>{this.props.blogData.title}</p>
                    </div>
                    <div className='description'>
                        <p>{this.props.blogData.body}</p>
                    </div>
                </div>
                <div className='extra content'>
                    <span className='left floated like'>
                        <i className='like icon'></i>
                        Like
                    </span>
                </div>
            </div>
        );
    }
}

export default BlogCard;