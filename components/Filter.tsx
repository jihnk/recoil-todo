import React from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from '../recoil/atom';

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <select value={filter} onChange={updateFilter} className="w-20 h-10 rounded-md border-gray-400 border-2 text-center">
      <option value="all">모두</option>
      <option value="complete">완료</option>
      <option value="incomplete">아직</option>
    </select>
  );
};

export default Filter;
