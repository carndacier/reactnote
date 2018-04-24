import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../types/note.type';

export const addNote = (note) => {
  return dispatch => {
    dispatch({
      type: ADD_NOTE,
      payload: note
    })
  }
}

export const editNote = (id, note) => {

  return dispatch => {
    dispatch({
      type: EDIT_NOTE,

      id: id,
      payload: note
    });
  }
}

export const removeNote = (id) => {

  return dispatch => {
    dispatch({
      type: REMOVE_NOTE,

      id: id
    });
  }
}
