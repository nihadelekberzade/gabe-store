import React from "react";

const BlogCard = ({ imageUrl, blogLink, blogType, blogDate, blogTitle, blogSubtitle, blogViewCount, blogCommentCount }) => (
  <article className="blogcard">
    <a className="blogcard__img" href={blogLink}>
      <img src={imageUrl} alt="blog card img" />
    </a>
    <div className="blogcard__info">
      <h5 className="blogcard__type">{blogType}</h5>
      <h4 className="blogcard__date">{blogDate}</h4>
    </div>
    <a className="blogcard__title" href={blogLink}>
      {blogTitle}
    </a>
    <a className="blogcard__subtitle" href={blogLink}>
      {blogSubtitle}
    </a>
    <div className="blogcard__stats">
      <span className="blogcard__views">{blogViewCount}</span>
      <span className="blogcard__comments">{blogCommentCount}</span>
    </div>
  </article>
);
export default BlogCard;