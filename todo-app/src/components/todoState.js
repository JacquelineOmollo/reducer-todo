import React, {useReducer} from 'react';
import { initialState, reducers } from "../Reducers/reducers";

const Todo = () => {
  const [state, dispatch] = useReducer(reducers, initialState);
  console.log(state);
  dispatch({ type: 'TODO_ADD', id: 3892987589});

  return (

  )
};

export default Todo;
