import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '/users';

function Navbar() {
  const users = [
    {
      name: 'Marie',
      githubLogin: 'Marie1993',
    },
    {
      name: 'Anna',
      githubLogin: 'Anna44',
    },
    {
      name: 'Guillaume',
      githubLogin: 'SirHarveyBix',
    },
    {
      name: 'Johana',
      githubLogin: 'MrsJo',
    },
  ];
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div> Liste des éléves : </div>
        <li>
          {users.map((user, index) => {
            return (
              <li key={index}>
                <Link to={`/users/${user.githubLogin}`}> {user.name} </Link>
              </li>
            );
          })}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
