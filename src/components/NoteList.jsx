import React, { Component } from 'react';
import './NoteList.css'

class NoteList extends Component {
    render() {
        return (
            <div className='note-list'>
                {this.props.children}
            </div>
        );
    }
}

export default NoteList;