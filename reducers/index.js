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
      let remainingDeck = state.decks.filter((deck) => {return deck.title !== action.title});
      return{
        remainingDeck
      }
    case ADD_CARD:
      return {
        ...state,
        [action.title] : {
          questions: [...state[action.title].questions].concat(action.card)
        }
      }
    default:
      return state;
  }

}
