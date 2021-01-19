import React from "react";
import moment from "moment";

const News = ({ article }) => {
  return (
    <a href={article.url} target="_blank">
      <img
        src={article.urlToImage}
        alt="article-image"
        height="200px"
        width="300px"
      />
      <div className="news-info">
        <h3>{article.title.substring(0, 27) + "..."}</h3>
        <p>
          {article.content
            ? article.content.substring(0, 100) + "..."
            : "Content Not Available"}
        </p>
      </div>
    </a>
  );
};

export default News;
