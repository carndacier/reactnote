import React from 'react';

import { connect } from 'react-redux';

import { editNote, removeNote } from '../actions/note.action';

class NoteComponent extends React.Component {

  _onEdit = () => {
    var note = { title: 'New Title !', content:  'New Content !' };
    this.props.dispatch(editNote(this.props.id, note));
  }

  _onRemove = () => {
    this.props.dispatch(removeNote(this.props.id));
  }

  render() {
    return (
     <div>
       <h2>{this.props.title}</h2>
       <p>{this.props.content}</p>
       <button onClick={this._onEdit}>Update</button>
       <button onClick={this._onRemove}>Remove</button>
     </div>
    )
  }
}

export default connect(state => state)(NoteComponent);
