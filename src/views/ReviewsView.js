import React, { useState, useEffect } from "react";
import * as movieAPI from "../services/services";

export default function ReviewsView({ id }) {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    movieAPI.fetchReviews(id).then((r) => setReviews(r.results));
  }, [id]);
  console.log(reviews);
  if (reviews) {
    if (reviews.length === 0) {
      return <h3>no reviews</h3>;
    }
    return (
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li id={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  }

  return <h3>No reviews</h3>;
}
