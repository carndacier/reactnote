import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NoteComponent from '../components/note.component';

import { addNote } from '../actions/note.action';

class App extends Component {

  _onAddNote = (value) => {
    this.props.dispatch(addNote({ title: 'Test', content: 'Hello there !'}));
  }

  render() {

    const notes = this.props.noteReducer.map((note) => <NoteComponent key={note.id} id={note.id} title={note.title} content={note.content} />);

    return (
      <div>
        {notes}
        <button onClick={this._onAddNote}>Add</button>
      </div>
    )
  }
}

export default connect(state => state)(App);
