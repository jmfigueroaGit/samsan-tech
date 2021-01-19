import React from "react";
import { useQuery } from "react-query";
import moment from "moment";

import News from "../components/News";

const Home = () => {
  // Query Covid Data API
  const { data, isLoading, error } = useQuery("covidData", async () => {
    return await fetch(
      "https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true"
    ).then((res) => res.json());
  });

  // Query Covid Related News
  const { data: news, isLoading: newsLoading } = useQuery("news", async () => {
    return await fetch(
      "http://newsapi.org/v2/top-headlines?country=ph&category=health&q=covid&apiKey=a6bd545bba8546168ab4f77670dbd9f3"
    ).then((res) => res.json());
  });

  // Check Queries
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data...</div>;

  return (
    // Container
    <div className="container">
      <div className="home">
        {/* Hero component */}
        <div className="hero-container">
          <div className="hero">
            <div className="hero-image">
              <img src="./virus.svg" alt="Virus Logo" />
            </div>
            <div className="hero-info">
              <div>
                <h1>AYOCOVID</h1>
                <h3>A COVID-19 Online Tracker</h3>
              </div>
              <p>
                This website provides latest data about COVID-19. We have the
                recent data and news based on world's data.
              </p>
              <button>See Statistics</button>
            </div>
          </div>
        </div>
        {/* Cases component */}
        <div className="cases">
          <div className="header">
            <pre>Cases</pre>
            <h3>Data as of {moment(data.lastUpdatedAtApify).format("ll")}</h3>
          </div>
          {/* Covid Data */}
          <div className="data">
            <div className="total">
              <h3>Total Confirmed Cases:</h3>
              <h1>{data.unique.toLocaleString()}</h1>
            </div>
            <div className="cards">
              <div className="card card-green">
                <h3>Recovered</h3>
                <h2>{data.recovered.toLocaleString()}</h2>
              </div>
              <div className="card card-blue">
                <h3>Active</h3>
                <h2>{data.activeCases.toLocaleString()}</h2>
              </div>
              <div className="card card-red">
                <h3>Deaths</h3>
                <h2>{data.deceased.toLocaleString()}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal red background */}

        <div className="diagonal-bg">
          <div className="news">
            <div className="header">
              <pre>News</pre>
              <h3>
                Articles data as of {/* Convert Date to Readable format */}
                {moment(data.lastUpdatedAtApify).format("ll")}
              </h3>
            </div>
            <div className="articles">
              {/* Check if Query of News API is loading */}
              {newsLoading
                ? null
                : news.articles.map((article, index) => {
                    if (index < 4)
                      return (
                        <div className="article">
                          {/* Pass article data to news component */}
                          <News key={index} article={article} />
                        </div>
                      );
                  })}
            </div>
          </div>
        </div>

        <div className="guidelines">
          <div className="header">
            <pre>Guidelines</pre>
            <h3>Health Protocols</h3>
          </div>
          <div className="content">{/* TODO: Guidelines Content */}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
