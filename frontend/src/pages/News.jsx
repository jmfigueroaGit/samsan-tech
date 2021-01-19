import React from "react";
import { useQuery } from "react-query";

import NewsComponent from "../components/News";

const News = () => {
  // Query Covid Related News
  const { data, isLoading, error } = useQuery("news", async () => {
    return await fetch(
      "http://newsapi.org/v2/top-headlines?country=ph&category=health&q=covid&apiKey=a6bd545bba8546168ab4f77670dbd9f3"
    ).then((res) => res.json());
  });

  // Check Queries
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data...</div>;

  return (
    <div className="container">
      <div className="news news-page">
        {data.articles.map((article, index) => (
          <div className="article">
            <NewsComponent key={index} article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
