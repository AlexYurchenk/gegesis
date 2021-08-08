import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as movieAPI from "../services/services";

export default function MovieSearch() {
  const [searchList, setSearchList] = useState(null);
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    movieAPI.fetchSearch(query).then((r) => setSearchList(r.results));
  }, [query]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setQuery(queryInput);

    setQueryInput("");
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label>
          Search Input
          <input
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            type="text"
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchList ? (
          searchList.map(({ id, original_title, original_name }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  {original_title ? original_title : original_name}
                </Link>
              </li>
            );
          })
        ) : (
          <h3>Ничего нет</h3>
        )}
      </ul>
    </>
  );
}
