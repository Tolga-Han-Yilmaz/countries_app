import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AllSearch = ({
  setFilterCountries,
  setSelectBarControl,
  selectBarControl,
  setSearch,
  filterCountries,
}) => {
  const handleSelectBar = (e) => {
    switch (e.target.value) {
      case "all":
        return setSelectBarControl(true);
      case "capital":
        return setSelectBarControl(false);
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(filterCountries);
  };
  return (
    <div className="d-flex flex-column align-items-center my-5">
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => setFilterCountries(e.target.value)}
            type="text"
            placeholder={
              selectBarControl ? "All searching" : "Capital Searching"
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select onChange={handleSelectBar}>
            <option value="all">All</option>
            <option value="capital">Capital</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="outline-success" className="w-100">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default AllSearch;
