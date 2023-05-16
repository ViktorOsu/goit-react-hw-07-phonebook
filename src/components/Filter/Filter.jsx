import { FilterCont, FilterTitle } from './Filter.styled';
import { onFilter } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterCont>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input
        type="text"
        onChange={e => dispatch(onFilter(e.currentTarget.value))}
      />
    </FilterCont>
  );
};
