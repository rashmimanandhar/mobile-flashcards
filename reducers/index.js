import {ADD_CARD, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK} from "../actions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case REMOVE_DECK:

      //https://stackoverflow.com/questions/34401098/remove-a-property-in-an-object-immutably
      const { title } = action;
      const { [title]: value, ...remainingDecks } = state;
      return remainingDecks;
    case ADD_CARD:
      return {
        ...state,
        [action.title] : {
          ...state[action.title],
          questions: state[action.title].questions.concat(action.card)
        }
      }
    default:
      return state;
  }

}
