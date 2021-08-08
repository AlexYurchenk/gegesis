import React, { useState, useEffect } from "react";
import * as movieAPI from "../services/services";
import imgDefault from "../images/35-350426_profile-icon-png-default-profile-picture-png-transparent.png";
export default function CastView({ id, BASE_IMG_URL }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    movieAPI.fetchCast(id).then((r) => setCast(r.cast));
  }, [id]);
  if (cast) {
    if (cast.length === 0) {
      return <h3>no cast</h3>;
    }
  }
  return (
    <ul>
      {cast &&
        cast.map(({ character, profile_path, original_name, id }) => (
          <li key={id}>
            {profile_path ? (
              <img src={`${BASE_IMG_URL}${profile_path}`} alt={original_name} />
            ) : (
              <img src={imgDefault} alt={original_name} />
            )}
            <p>name {original_name}</p>
            <p>character {character}</p>
          </li>
        ))}
    </ul>
  );
}
