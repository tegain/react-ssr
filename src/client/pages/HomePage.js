import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div>I'm the Home component.</div>
    <button onClick={() => console.log('Clicked')}>Click me</button>
	  <Link to={'/users'}>Users</Link>
  </div>
);

export default { component: Home };
