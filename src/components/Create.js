import React from 'react';
import firebase from '../Firebase'; // our firebase settings file
import {Link} from 'react-router-dom';

export class Create extends React.Component {
    constructor() {
        super();
        this.ref =
            firebase
                .firestore()
                .collection('boards');
        this.state = {
            title: ``,
            description: ``,
            author: ``
        }
    }

    onChange = e => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({state});
    };

    onSubmit = e => {
        e.preventDefault();
        const {title, description, author} = {...this.state};

        if (title.trim().length && description.trim().length && author.trim().length) {
            this
                .ref
                .add({
                    title,
                    description,
                    author
                })
                .then(() => {
                    this.props.history.push('/');
                });
        }
    };

    render() {
        const {title, author, description} = this.state;
        return (
            <div
                className='container'>
                <h4>
                    <Link to="/">Book List</Link>
                </h4>

                <form
                    autoComplete='off'
                    onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">
                            Title: </label>
                        <input
                            className='form-control'
                            name='title'
                            defaultValue={title}
                            onChange={this.onChange}
                            placeholder='Title'
                            type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            id="description"
                            cols="80"
                            rows="3"
                            onChange={this.onChange}
                            placeholder='Description'
                            defaultValue={description}
                            className="form-control">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">
                            Author: </label>
                        <input
                            className='form-control'
                            name='author'
                            defaultValue={author}
                            onChange={this.onChange}
                            placeholder='Author'
                            type="text"/>
                    </div>

                    <button
                        type='submit'
                        className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}