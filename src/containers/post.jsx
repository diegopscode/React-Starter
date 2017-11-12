import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from '../actions'

class Post extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchPost(id);
    }

    onDelete() {
        const { id } = this.props.match.params
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div className="container">Loading...</div>
        }

        return (
            <div className="container post-content">
                <div className="float-right">
                    <button className="btn btn-danger"
                        onClick={this.onDelete.bind(this)}>
                        Delete post
                    </button>
                </div>
                <h3>{ post.title }</h3>
                <h6>Categories: { post.categories }</h6>
                <p>{ post.content }</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(Post);