import React from 'react';
import firebase from '../Firebase'; // our firebase settings file
import {Link} from 'react-router-dom';
import {firestore} from "firebase";

export class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: {},
            key: ``,
            isLoading: true
        }
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
        ref
            .get()
            .then(doc => {
                    doc.exists ?
                        this.setState({
                            board: doc.data(),
                            key: doc.id,
                            isLoading: false
                        }) :
                        console.log('No such document');
                }
            )
    }

    onChange = e => {
        const { name, value } = e.target;

        this.setState(prevState => ({
            board: {
                ...prevState.board,
                [name]: value
            }
        }))
    };

    save = (e, id) => {
        e.preventDefault();
        const { title, author, description } = this.state.board;

        firestore()
            .collection('boards')
            .doc(id)
            .set({
                title,
                author,
                description
            })
            .then(() => {
                this.props.history.push(`/show/${this.props.match.params.id}`);
            })
            .catch(err => {
                console.error(`Error editing board: ${err}`);
            });
    };

    render() {
        const { title, description, author } = this.state.board;

        return (
            <div
                className='container'>
                <h4>
                    <Link to="/">Boards List</Link>
                </h4>

                <form
                    autoComplete='off'
                    onSubmit={e => this.save(e, this.state.key)}>
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
                        className='btn btn-success mr-2'>
                        Save
                    </button>
                    <Link
                        to={`/`}
                        className='btn btn-danger'>
                        Cancel
                    </Link>
                </form>
            </div>
        )
    }
}
