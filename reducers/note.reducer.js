import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../types/note.type';

const initState = [];

export default (state = initState, action) => {

  switch (action.type) {

    case ADD_NOTE:
      var note = action.payload;
      if (state.length == 0)
        note.id = 0;
      else {
        note.id = state.reduce(function (prev, current) {
          return (prev.y > current.y) ? prev : current
        }).id + 1;
      }
      return [...state, note];

      case EDIT_NOTE:

      const updatedItems = state.map(item => {
        // If matching item, return an updated version of the item
        if (item.id === action.id)
          return { ...item, ...action.payload };
        // Otherwise, return the item
        return item;
      })
      return updatedItems;

      case REMOVE_NOTE:

      return state.filter(element => element.id !== action.id);

    default:
      return state;
  }
}
