import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ButtonForm, InputForm } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      toast.error("Sorry, the search string can't be empty. Please try again.");
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputForm
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        ></InputForm>
        <ButtonForm type="submit">Search</ButtonForm>
      </form>
    </div>
  );
};
SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
