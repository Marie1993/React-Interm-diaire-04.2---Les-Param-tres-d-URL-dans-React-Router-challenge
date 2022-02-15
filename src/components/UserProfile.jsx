import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const params = useParams();
  return (
    <div>
      <h1>Profil </h1>
      <div>Voici mon lien github : <a href={`https://github.com/${params.githubLogin}`}> {params.githubLogin} </a> </div>
    </div>
  );
}

export default UserProfile;
