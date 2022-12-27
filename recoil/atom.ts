import { TodoType } from './../type';
import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: '',
});

export const todoListState = atom<TodoType[]>({
  key: 'todoListState',
  default: [],
});

export const filterState = atom({
  key: 'filter',
  default: 'all',
});
