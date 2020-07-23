import { createStore } from "redux";

const ADD = "TODO/ADD";
const DELETE = "TODO/DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

// React는 DOM 전체가 아닌 변경된 부분만을 리렌더링합니다.

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
