// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";

// const CapitalSearch = ({ filterCountries, countries, setFilterCountries }) => {
//   const [deneme, setDeneme] = useState("");
//   // const search = deneme[0].toUpperCase() + deneme.slice(1).toLowerCase();
//   // const filteredCountries = countries.filter((item) => {
//   //   return Object.keys(item).some((key) =>
//   //     item.capital[key].toString().toLowerCase().includes(deneme.toLowerCase())
//   //   );
//   // });
//   // const test = countries?.filter((country) => {
//   //   return Object.keys(country).some((key) =>
//   //     country.capital[key]?
//   //       .toString()
//   //       .toLowerCase()
//   //       .includes(deneme.toLowerCase())
//   //   );
//   // });
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const searchKey = deneme[0].toUpperCase() + deneme.slice(1).toLowerCase();
//   //   // return setFilterCountries(
//   //   //   countries?.filter((country) => country.capital?.includes(searchKey))
//   //   // );
//   //   return setFilterCountries(
//   //     countries.filter((country) => country.capital === searchKey)
//   //   );
//   // };
//   return (
//     <div className="d-flex flex-column align-items-center ">
//       <form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             name="name"
//             value={deneme}
//             // onChange={(e) => setFilterCountries(e.target.value)}
//             onChange={(e) => setDeneme(e.target.value)}
//             type="text"
//             placeholder="All searching"
//           />
//         </Form.Group>
//         <button>ok</button>
//       </form>
//     </div>
//   );
// };

// export default CapitalSearch;
