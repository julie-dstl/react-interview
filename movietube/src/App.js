import React from 'react';
import Card from './components/Card';

const App = () => {
  const movie = {
    title: 'test',
    category: 'Romance',
    likes: 9,
    dislikes: 10
  };

  return (
    <div>
      <Card {...movie} />
    </div>
  );
};

export default App;