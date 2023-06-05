import { useSelector, useDispatch } from 'react-redux';
import { statusFilter } from 'redux/filter/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilter = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.boxFilter}>
      <p className={css.text}> Select cards</p>
      <div className={css.boxButton}>
        <button
          selected={filter === statusFilter.all}
          onClick={() => handleFilter(statusFilter.all)}
          type="button"
          className={css.button}
        >
          All
        </button>

        <button
          selected={filter === statusFilter.follow}
          onClick={() => handleFilter(statusFilter.follow)}
          type="button"
          className={css.button}
        >
          Follow
        </button>

        <button
          selected={filter === statusFilter.following}
          onClick={() => handleFilter(statusFilter.following)}
          type="button"
          className={css.button}
        >
          Following
        </button>
      </div>
    </div>
  );
};
