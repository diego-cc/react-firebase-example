import React from 'react';
import firebase from "../Firebase";
import {Link} from "react-router-dom";

export class App extends React.Component {
    constructor(props) {
        super(props); // get properties from Component
        this.ref = firebase.firestore().collection('boards');
        this.unsubscribe = null;
        this.state = {
            boards: [],
        }
    }

    onCollectionUpdate = querySnapshot => {
        const boards = [];
        querySnapshot.forEach(doc => {
            const {title, author, description} = doc.data;
            boards.push({
                key: doc.id,
                doc, // document snapshot,
                title,
                author,
                description
            })
        });
        this.setState({boards});
    };

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            BOARD LIST
                        </h3>
                    </div>
                </div>
                <div className="panel-body">
                    <h4>
                        <Link to='/create'>Add Board</Link>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Author</th>
                            </tr>
                            </thead>
                        </table>
                    </h4>
                </div>
            </div>
        )
    }
}