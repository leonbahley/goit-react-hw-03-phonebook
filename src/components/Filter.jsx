import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.Filter}>
    Filter contacts by name
    <input
      className={css.FilterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
