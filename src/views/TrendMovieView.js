import React, { useState, useEffect } from "react";
import * as movieAPI from "../services/services";
import { Link } from "react-router-dom";

export default function TrendMovieView() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    movieAPI.fetchTrend().then((r) => setTrends(r.results));
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trends &&
          trends.map(({ id, original_title, original_name }) => (
            <li id={id}>
              <Link to={`/movies/${id}`}>
                {original_title ? original_title : original_name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
