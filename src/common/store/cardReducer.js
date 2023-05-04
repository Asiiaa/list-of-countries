import { AREA, DEPENDENT, INDEPENDENT, POPULATION } from './actionCards';

import json from './state';

const INITIAL_STATE = {
        cards: json
};

export default function cardsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case AREA:
      return {
        ...state,
        cards: state.cards.sort((a, b) => b.area - a.area),
      }
    default: return state
}
}
