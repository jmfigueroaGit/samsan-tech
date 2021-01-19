import { useQuery } from "react-query";

export default function useData() {
  return useQuery("covidAllData", async () => {
    return fetch("/api/covid/data").then((res) => res.json());
  });
}
