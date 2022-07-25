// import { useState } from "react";

// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AllSearch = ({ countries, setCountries, setFilterCountries }) => {
  return (
    <div className="d-flex flex-column align-items-center ">
      {/* <form onSubmit={handleSubmit}> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          name="name"
          // value={allSearch.phone}
          // onChange={(e) => handleChange(e)}
          onChange={(e) => setFilterCountries(e.target.value)}
          type="text"
          placeholder="All searching"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select
          name="list"
          // onChange={(e) => handleChange(e)}
          onChange={(e) => setFilterCountries(e.target.value)}
        >
          <option value="all">All</option>
          <option value="capital">Capital</option>
        </Form.Select>
      </Form.Group>
      {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      {/* </form> */}
    </div>
  );
};

export default AllSearch;
