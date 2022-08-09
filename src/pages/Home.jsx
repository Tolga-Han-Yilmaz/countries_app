import { useState, useEffect } from "react";
import axios from "axios";
import AllSearch from "../components/AllSearch";
import CountriesList from "../components/CountriesList";
import loadingGif from "../assets/loading.gif";
import NavBar from "../components/NavBar";

const url = "https://restcountries.com/v2/all";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterCountries, setFilterCountries] = useState("");
  const [selectBarControl, setSelectBarControl] = useState(true);
  const [search, setSearch] = useState("");
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
      <NavBar />
      {loading ? (
        <img src={loadingGif} alt="loading" />
      ) : (
        <div>
          <AllSearch
            setFilterCountries={setFilterCountries}
            setSelectBarControl={setSelectBarControl}
            selectBarControl={selectBarControl}
            setSearch={setSearch}
            filterCountries={filterCountries}
          />
          <CountriesList
            countries={countries}
            filterCountries={filterCountries}
            selectBarControl={selectBarControl}
            search={search}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
