export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const reducers = (state, action) => {
  switch (action.type) {
    case "TODO_ADD":
      return {
        ...state,
        todo: [
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          },
          ...state.todo
        ]
      };
    case "UNDO_TODO":
      return {
        ...state,
        todo: state.todo.map((todos, index) => {
          if (index === action.payload) {
            return {
              item: state.todo[action.payload].item,
              completed: state.todo[action.payload].completed,
              id: state.todo[action.payload].Date.now()
            };
          }
          return todos;
        })
      };
    case "TOGGLE_LIST":
      return {
        ...state,
        completed: !state.completed
      };
    case "DELETE_LIST":
      return {
        ...state,
        item: "",
        completed: !state.completed
      };
    default:
      return state;
  }
};
