import React from 'react';
import firebase from '../Firebase'; // our firebase settings file
import {Link} from 'react-router-dom';

export class Show extends React.Component {
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

    delete(id) {
        firebase
            .firestore()
            .collection('boards')
            .doc(id)
            .delete()
            .then(() => {
                console.log('Document successfully deleted!');
                this.props.history.push('/');
            })
            .catch(err => {
                console.error(`Error message: \n${err}`);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="card card-default">
                    <div className="card-header">
                        <h4><Link to='/'>Board List</Link></h4>
                    </div>
                    <div className="card-body">
                        <dl>
                            <div>Description:
                                <p>
                                    {this.state.board.description}
                                </p>
                            </div>
                            <div>Author:
                                <p>
                                    {this.state.board.author}
                                </p>
                            </div>
                            <div>Title:
                                <p>
                                    {this.state.board.title}
                                </p>
                            </div>
                        </dl>
                        <Link
                            className='btn btn-success mr-2'
                            to={`/edit/${this.state.key}`}>
                            Edit
                        </Link>
                        <button
                            className='btn btn-danger'
                            onClick={
                                this
                                    .delete
                                    .bind(
                                        this,
                                        this.state.key)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
