import React, { useState, useEffect } from "react";
import * as movieAPI from "../services/services";

export default function CastView({ id, BASE_IMG_URL }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    movieAPI.fetchCast(id).then((r) => setCast(r.cast));
  }, [id]);
  return (
    <ul>
      {cast &&
        cast.map(({ character, profile_path, original_name }) => (
          <li>
            <img src={`${BASE_IMG_URL}${profile_path}`} alt={original_name} />
            <p>name {original_name}</p>
            <p>character {character}</p>
          </li>
        ))}
    </ul>
  );
}
