import { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
