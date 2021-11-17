import React, { useState, useEffect } from "react";
import Card from "../components/Post";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import NotFoundView from "../components/ErrorView/ErrorView";

export default function TrendMovieView() {
  const [trends, setTrends] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [trendsVisible, setTrendsVisible] = useState(1);
  const handleChange = (e, value) => {
    setPage(value);
  };
  useEffect(() => {
    if (trends.slice) {
      setTrendsVisible(trends.slice((page - 1) * 10, page * 10));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [page, trends]);

  useEffect(() => {
    setLoading(true);
    fetch("https://tiktok33.p.rapidapi.com/trending/feed", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tiktok33.p.rapidapi.com",
        "x-rapidapi-key": "6dbf1d2982msh94fee0a8b27c9c2p144b2djsn47151d6f7386",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((r) => {
        setLoading(false);
        return setTrends(r);
      })

      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(trends.message);
  if (trends.message) {
    return <NotFoundView />;
  }
  return (
    <>
      <h2>Trending today</h2>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {(loading ? Array.from(new Array(10)) : trendsVisible).map(
          (item, i) => {
            if (item) {
              const {
                id,
                commentCount,
                diggCount,
                videoUrl,
                authorMeta,
                text,
              } = item;
              return (
                <Grid key={id} item xs={4} sm={4} md={4}>
                  <Card
                    commentCount={commentCount}
                    diggCount={diggCount}
                    video={videoUrl}
                    name={authorMeta.name}
                    id={authorMeta.id}
                    text={text}
                    avatar={authorMeta.avatar}
                  />
                </Grid>
              );
            }
            return (
              <Grid key={i} item xs={4} sm={4} md={4}>
                <Skeleton variant="rectangular" width={250} height={400} />
              </Grid>
            );
          }
        )}
      </Grid>
      {!loading && (
        <Pagination
          page={page}
          onChange={handleChange}
          count={Math.ceil(trends.length / 10)}
        />
      )}
    </>
  );
}
