import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

const CountriesList = ({ countries, filterCountries }) => {
  const filteredCountries = countries.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterCountries.toLowerCase())
    );
  });

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>#</th>
            <th>Flag</th>
            <th>Country Name</th>
            <th>Capital</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries?.map((country, index) => {
            const {
              flags: { png },
              name,
              capital,
              region,
            } = country;
            return (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>
                  <Image src={png} alt={name} fluid width="150px" />
                </td>
                <td>{name}</td>
                <td>{capital}</td>
                <td>{region}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="text-center">
              <h3>Total Countries : {filteredCountries.length}</h3>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CountriesList;
