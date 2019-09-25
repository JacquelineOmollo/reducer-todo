import React, { useReducer, useState } from "react";
import { initialState, reducers } from "../Reducers/reducers";

const TodoForm = () => {
  const [newText, setnewText] = useState();
  const [state, dispatch] = useReducer(reducers, initialState);
  console.log(state);

  const handleChange = event => {
    dispatch({ type: "TODO_ADD", id: Date.now() });
    setnewText(event.target.value);
  };
  return (
    <ul>
      {state.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              value={newText}
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
            />
            {todo.item}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoForm;
