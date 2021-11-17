import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Post";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";

export default function MovieViews() {
  const params = useParams();
  const username = params.profileId;
  const [profile, setProfile] = useState();
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const [profileVisible, setProfilesVisible] = useState(null);
  const [page, setPage] = useState(1);
  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (Array.isArray(profile)) {
      setProfilesVisible(profile.slice((page - 1) * 10, page * 10));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [page, profile]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://tiktok33.p.rapidapi.com/user/info/${username}`, {
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
        setUser(r);
        return;
      })

      .catch(function (error) {
        console.error(error);
      });
    fetch(`https://tiktok33.p.rapidapi.com/user/feed/${username}`, {
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
        setProfile(r);
        setLoading(false);
        return;
      })

      .catch(function (error) {
        console.error(error);
      });
  }, [username]);

  if (loading) {
    return (
      <>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(new Array(10)).map((e, i) => (
            <Grid key={i} item xs={4} sm={4} md={4}>
              <Skeleton variant="rectangular" width={250} height={400} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
  if (!loading) {
    return (
      <>
        <Card
          text={user.user.signature}
          avatar={user.user.avatarMedium}
          name={user.user.nickname}
          diggCount={user.stats.heartCount}
          followerCount={user.stats.heartCount}
        />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.isArray(profileVisible) &&
            profileVisible.map(({ id, stats, video, author, desc }) => (
              <Grid key={id} item xs={4} sm={4} md={4}>
                <Card
                  commentCount={stats.commentCount}
                  diggCount={stats.diggCount}
                  video={video.downloadAddr}
                  name={author.nickname}
                  id={author.id}
                  text={desc}
                  avatar={author.avatarMedium}
                  playCount={stats.playCount}
                />
              </Grid>
            ))}
        </Grid>
        {Array.isArray(profileVisible) && (
          <Pagination
            page={page}
            onChange={handleChange}
            count={Math.ceil(profile.length / 10)}
          />
        )}
      </>
    );
  }
  // if (user) {
  //   return (
  //     <>
  //       <Card
  //         text={user.signature}
  //         avatar={user.avatarMedium}
  //         name={user.nickname}
  //         diggCount={user.stats.heartCount}
  //         followerCount={user.stats.followerCount}
  //       />
  //     </>
  //   );
  // }
}
