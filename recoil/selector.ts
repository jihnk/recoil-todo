import { selector } from 'recoil';
import { todoListState, filterState } from './atom';

export const todoState = selector({
  key: 'completeState',
  get: ({ get }) => {
    const filter = get(filterState);
    const todos = get(todoListState);
    switch (filter) {
      case 'all':
        return todos;
      case 'complete':
        return todos.filter((todo) => todo.isComplete);
      case 'incomplete':
        return todos.filter((todo) => !todo.isComplete);
      default:
        return todos;
    }
  },
});
