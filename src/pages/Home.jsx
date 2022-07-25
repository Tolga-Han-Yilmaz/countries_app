import { useState, useEffect } from "react";
import axios from "axios";
import AllSearch from "../components/AllSearch";
import CapitalSearch from "../components/CapitalSearch";
import CountriesList from "../components/CountriesList";

const url = "https://restcountries.com/v2/all";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCountries(url);
  }, []);

  const getCountries = async (API) => {
    setLoading(true);
    await axios
      .get(API)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <AllSearch />
      <CapitalSearch />
      {loading ? (
        <p>loading</p>
      ) : (
        <CountriesList countries={countries} setCountries={setCountries} />
      )}
    </div>
  );
};

export default Home;
