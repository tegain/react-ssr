import React from 'react';

const Home = () => (
  <div>
    <div>I'm the Home component.</div>
    <button onClick={() => console.log('Clicked')}>Click me</button>
  </div>
);

export default { component: Home };
