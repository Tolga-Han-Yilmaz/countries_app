/* eslint-disable array-callback-return */
/* eslint-disable no-extend-native */
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { useMemo } from "react";

const CountriesList = ({ countries, selectBarControl, search }) => {
  // Türkçe karakter problemi çözümü için
  String.prototype.turkishtoEnglish = function () {
    return this.replace("Ğ", "g")
      .replaceAll("Ü", "u")
      .replaceAll("Ş", "s")
      .replaceAll("I", "i")
      .replaceAll("İ", "i")
      .replaceAll("Ö", "o")
      .replaceAll("Ç", "c")
      .replaceAll("ğ", "g")
      .replaceAll("ü", "u")
      .replaceAll("ş", "s")
      .replaceAll("ı", "i")
      .replaceAll("ö", "o")
      .replaceAll("ç", "c");
  };

  // Arama JSON yapısındaki bütün verileri içermektedir
  // İstek tekrarına düşmeden arama yapmak için useMemo Hook'u kullanıldı
  const filteredAll = useMemo(
    () =>
      countries.filter((item) =>
        Object.keys(item).some((key) => {
          if (typeof item[key] == "string") {
            console.log(5);
            return item[key]
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase().turkishtoEnglish());
          } else if (typeof item[key] == "object") {
            console.log(75);
            if (Array.isArray(item[key])) {
              console.log(item[key]);
              return item[key].some((i) =>
                typeof i == "object"
                  ? Object.values(i).some((j) =>
                      j
                        .toString()
                        .toLowerCase()
                        .includes(search.toLowerCase().turkishtoEnglish())
                    )
                  : i
                      .toString()
                      .toLowerCase()
                      .includes(search.toLowerCase().turkishtoEnglish())
              );
            } else {
              console.log(Object.values(item));
              return Object.values(item).some((k) =>
                k
                  .toString()
                  .toLowerCase()
                  .includes(search.toLowerCase().turkishtoEnglish())
              );
            }
          }
        })
      ),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]
  );

  // Arama JSON yapısındaki başkentlere göre yapmaktadır
  // İstek tekrarına düşmeden arama yapmak için useMemo Hook'u kullanıldı
  const filteredCapital = useMemo(
    () =>
      countries.filter((item) => {
        return Object.keys(item).some(
          (key) =>
            key === "capital" &&
            item["capital"]
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase())
        );
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]
  );
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
          {selectBarControl
            ? filteredAll?.map((country, index) => {
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
              })
            : filteredCapital?.map((country, index) => {
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
              <h3>
                Total Countries :
                {selectBarControl ? filteredAll.length : filteredCapital.length}
              </h3>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CountriesList;
