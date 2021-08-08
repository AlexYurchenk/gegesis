import React, { useState, useEffect } from "react";
import * as movieAPI from "../services/services";
import { useParams, Link, Route } from "react-router-dom";
import CastView from "./CastView";
import ReviewsView from "./ReviewsView";
import imgDefault from "../images/movieDefault.png";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/";
export default function MovieView() {
  const params = useParams();
  const id = Number(params.moviesId);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    movieAPI.fetchMovies(id).then(setMovie);
  }, [id]);
  return (
    <div>
      {movie && (
        <>
          <h3>
            {movie.original_title}
            {movie.release_date.slice(0, 4)}
          </h3>
          <p>User score {movie.vote_average}</p>
          {movie.backdrop_path ? (
            <img src={`${BASE_IMG_URL}${movie.backdrop_path}`} alt="" />
          ) : (
            <img src={imgDefault} alt="default" />
          )}
          <p>Overview: {movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`/movies/${id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${id}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <Route path={`/movies/${id}/cast`}>
              <CastView BASE_IMG_URL={BASE_IMG_URL} id={id} />
            </Route>
            <Route path={`/movies/${id}/reviews`}>
              <ReviewsView id={id} />
            </Route>
          </div>
        </>
      )}
    </div>
  );
}
