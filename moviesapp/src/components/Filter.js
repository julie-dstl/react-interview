import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const selectedCategories = useSelector(state => state.filter);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(movies.map(movie => movie.category))];
    setCategories(uniqueCategories);
  }, [movies]);

  const handleCategoryChange = (category) => {
    let newSelectedCategories;
    if (selectedCategories.includes(category)) {
      newSelectedCategories = selectedCategories.filter(c => c !== category);
    } else {
      newSelectedCategories = [...selectedCategories, category];
    }
    dispatch(setFilter(newSelectedCategories));
  };

  return (
      <div className="filter-container">
        {categories.map(category => (
            <label key={category} className="filter-label">
              <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
        ))}
      </div>
  );
};

export default Filter;