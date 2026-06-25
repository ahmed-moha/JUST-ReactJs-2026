import { useReducer } from 'react';

// W3Schools useReducer example: score board for multiple players
export const initialScore = [
  { id: 1, score: 0, name: 'John' },
  { id: 2, score: 0, name: 'Sally' },
];

export function scoreReducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        }
        return player;
      });
    default:
      return state;
  }
}

function useReducerScore() {
  const [score, dispatch] = useReducer(scoreReducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: 'INCREASE', id: player.id });
  };

  return { score, handleIncrease };
}

export default useReducerScore;
