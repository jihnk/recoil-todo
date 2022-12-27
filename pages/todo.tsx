import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';

import { todoListState, userState } from '../recoil/atom';
import { todoState } from '../recoil/selector';

import { TodoItem, Button, Filter, Container } from '../components';
import { useInput } from '../hooks/useInput';

import { TodoType } from '../type';

export default function Todo() {
  const router = useRouter();
  const userName = useRecoilValue(userState);
  const [, setTodos] = useRecoilState(todoListState);
  const [value, setValue, onChange, isValid] = useInput('');
  const todoList = useRecoilValue(todoState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isValid) {
      setTodos((todos) => [
        ...todos,
        {
          id: todos.length,
          content: value,
          isComplete: false,
        },
      ]);
      setValue('');
    }
  };

  useEffect(() => {
    if (!userName) {
      router.push(`/`);
    }
  }, []);

  return (
    <Container>
      <div className="flex flex-col py-20 w-full">
        <h1 className="text-4xl text-center text-red-900 font-extrabold">{userName}'s To do</h1>
        <Filter />
        <ul>
          {todoList.map((todo: TodoType) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
        <form className="flex justify-between w-full gap-x-3 mt-10">
          <input
            placeholder="새로운 할 일"
            type="text"
            value={value}
            onChange={onChange}
            className="w-full h-10 border-b-2 text-center outline-0 placeholder:text-center placeholder:text-xl bg-transparent border-[gray]"
          />
          <Button onClick={onClick}>추가</Button>
        </form>
      </div>
    </Container>
  );
}
