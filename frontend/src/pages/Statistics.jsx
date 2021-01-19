import React from "react";
import moment from "moment";
import { useQuery } from "react-query";

const Statistics = () => {
  // Query Covid Data API
  const { data, isLoading, error } = useQuery("covidData", async () => {
    return await fetch(
      "https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true"
    ).then((res) => res.json());
  });

  // Check if API data is Ready
  if (isLoading) return <div className="">Loading...</div>;
  if (error) return <div className="">Error Fetching data</div>;

  return (
    <div className="container">
      <div className="home">
        <div className="diagonal-bg">
          <div className="news">
            <div className="header">
              <pre>Cases</pre>
              <h3>
                Covid cases as of {moment(data.lastUpdatedAtApify).format("ll")}
              </h3>
            </div>
            <div className="cards">
              <div className="card-container card-container-one">
                <div className="card">
                  <h3>Total Confirmed Cases:</h3>
                  <h1>{data.unique.toLocaleString()}</h1>
                </div>
              </div>
              <div className="card-container card-container-three">
                <div className="card">
                  <h3>Recovered</h3>
                  <h2>{data.recovered.toLocaleString()}</h2>
                </div>
                <div className="card">
                  <h3>Active</h3>
                  <h2>{data.activeCases.toLocaleString()}</h2>
                </div>
                <div className="card">
                  <h3>Deaths</h3>
                  <h2>{data.deceased.toLocaleString()}</h2>
                </div>
              </div>
              <div className="card-container card-container-two">
                <div className="card">
                  <h3>Tested</h3>
                  <h2>{data.tested.toLocaleString()}</h2>
                </div>
                <div className="card">
                  <h3>Infected</h3>
                  <h2>{data.infected.toLocaleString()}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
