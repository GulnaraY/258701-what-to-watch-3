import React from 'react';
import Main from './main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, release} = props;

  return (
    <Main
      title = {title}
      genre = {genre}
      release = {release}
    />
  );
};

export default App;
