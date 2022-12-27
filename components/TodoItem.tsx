import React from 'react';
import { TodoType } from '../type';
import Check from '../assets/check.svg';
import Box from '../assets/box.svg';
import Trash from '../assets/trash.svg';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atom';
import { useInput } from '../hooks/useInput';

type TodoItemProp = {
  todo: TodoType;
};

const TodoItem = ({ todo }: TodoItemProp) => {
  const [value, , onChange] = useInput(todo.content);
  const [todos, setTodos] = useRecoilState(todoListState);
  const index = todos.findIndex((listItem) => listItem === todo);
  const toggleComplete = () => {
    const newList = replaceItem(todos, index, {
      ...todo,
      isComplete: !todo.isComplete,
    });
    setTodos(newList);
  };

  const deleteItem = () => {
    const newList = removeItem(todos, index);
    setTodos(newList);
  };

  const editItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItem(todos, index, {
      ...todo,
      content: e.target.value,
    });
    setTodos(newList);
  };

  const { isComplete, content } = todo;

  const replaceItem = (arr: TodoType[], index: number, newValue: TodoType) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const removeItem = (arr: TodoType[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  return (
    <li className="flex h-10 justify-between items-center gap-x-4">
      {isComplete ? <Check width="30" height="30" onClick={toggleComplete} /> : <Box width="30" height="30" onClick={toggleComplete} />}
      <input
        className={`${
          isComplete
            ? 'w-full text-xl font-semibold border-b-2 border-red-700 border-dashed bg-transparent outline-0 line-through'
            : 'w-full text-xl font-semibold border-b-2 border-red-700 border-dashed bg-transparent outline-0'
        }`}
        type="text"
        value={content}
        onChange={editItem}
        onSubmit={editItem}
      />
      <Trash width="30" height="30" onClick={deleteItem}></Trash>
    </li>
  );
};

export default TodoItem;
