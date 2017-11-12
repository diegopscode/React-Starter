import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'

class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link className="post-item" to={`/post/${post.id}`}>{post.title}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="container home-page">
                <div className="float-right">
                    <Link className="btn" to='/post/new'>
                        Add Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group post-list">
                    { this.renderPosts() }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(Home);