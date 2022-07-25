import { useState, useEffect } from "react";
import axios from "axios";
import AllSearch from "../components/AllSearch";
import CountriesList from "../components/CountriesList";

const url = "https://restcountries.com/v2/all";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterCountries, setFilterCountries] = useState("");

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
      <AllSearch
        countries={countries}
        setCountries={setCountries}
        setFilterCountries={setFilterCountries}
      />

      {loading ? (
        <p>loading</p>
      ) : (
        <CountriesList
          countries={countries}
          filterCountries={filterCountries}
        />
      )}
    </div>
  );
};

export default Home;
