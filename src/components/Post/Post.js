import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useLocation } from "react-router-dom";
import Comment from "@mui/icons-material/Comment";

export default function RecipeReviewCard({
  video,
  followerCount,
  name,
  diggCount,
  id,
  avatar,
  text,
  commentCount,
  playCount,
}) {
  const location = useLocation();
  let hashtags = [];

  if (text) {
    hashtags = [...text.split("#").slice(1)];
  }
  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          avatar ? (
            <Link
              to={{
                pathname: `/porofile/${name}`,
                state: {
                  from: location,
                },
              }}
            >
              <Avatar src={avatar} aria-label={text} />
            </Link>
          ) : (
            <Link
              to={{
                pathname: `/porofile/${name}`,
                state: {
                  from: location,
                },
              }}
            >
              <Avatar aria-label={name} />{" "}
            </Link>
          )
        }
        title={
          <Link
            to={{
              pathname: `/porofile/${name}`,
              state: {
                from: location,
              },
            }}
          >
            {name}
          </Link>
        }
      />
      {video && <CardMedia component="video" controls src={video} />}

      <CardContent>
        {text && (
          <Typography variant="body2" color="text.secondary">
            {text.split("#")[0]}
          </Typography>
        )}
        <FavoriteIcon />
        <Typography variant="body2" color="text.secondary">
          {diggCount}
        </Typography>{" "}
        <Comment />
        {commentCount && (
          <Typography variant="body2" color="text.secondary">
            {commentCount}
          </Typography>
        )}
        {playCount && (
          <Typography variant="body2" color="text.secondary">
            {playCount}
          </Typography>
        )}
        {followerCount && (
          <Typography variant="body2" color="text.secondary">
            follower count {followerCount}
          </Typography>
        )}
        {hashtags &&
          hashtags.map((h, i) => (
            <Typography key={i} variant="body2" color="text.secondary">
              {"#" + h}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
}
