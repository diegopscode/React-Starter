import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createPost } from '../actions'

class PostNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group${touched && error ? ' has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input} 
                />
                <div className='text-help'>
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values).then(resp => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <div className="container">
                <form className="post-add" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title for Post"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                    />
                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    if(!values.title) {
        errors.title = "Enter a title!"
    }

    if(!values.categories) {
        errors.categories = "Enter some categories!"
    }

    if(!values.content) {
        errors.content = "Enter some content please!"
    }

    return errors
}

export default reduxForm({
    form: 'PostNewForm',
    validate: validate
})(
    connect(null, { createPost })(PostNew)
);