import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/auth/filterSlice';
import { onFilterChange } from 'redux/auth/filterSlice';

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(onFilterChange);
  const onChangeFilter = event => dispatch(filterAction.changeFilter(event));

  return { filter, changeFilter: onChangeFilter };
};
