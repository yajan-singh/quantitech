import React from "react";
import authorImage from "@/images/blog/8.jpg";

const AuthorCard = () => {
  return (
    <div className="post_author">
      <img src={authorImage} alt="" />
      <h3>
        <a href="#">Christine Eve</a>
      </h3>
      <p>
        KAVAN IS A CREATIVE AGENCY FOCUSED ON GROWING YOUR BUSINESS ONLINE.
      </p>
      <a href="#">View all posts</a>
    </div>
  );
};

export default AuthorCard;
