## [See the Page](https://countriesapp2022.netlify.app/)

    - I developed the application with ReactJS,
    - I pulled the data from api with axios,
    - I listed all countries in the table by flag, name, capital and region,
    - There are 2 options in the search section,
    - The first is the search to cover all the data in the api,
    - The second is the search by capital of the countries,
    - I used Bootstrap for design.

- Uygulama yükleme anında 2 kere http isteği atmaktaydı. Problemin çözümü için index.js'deki <React.StrictMode> silindi. Yükleme anında istek 1 kere atılmaktadır.
- İstek tekrarına düşmeden arama/filtreleme yapmak için useMemo Hook'u kullanıldı.
- Türkçe karakter problemi çözmek için CountriesList.jsx'deki turkishtoEnglish() fonksiyonu kullanıldı.
- Genel arama JSON yapısındaki bütün verileri içermektedir. Çözümü için CountriesList.jsx'de filteredAll'daki gerekli kodlar bulunmaktadır.
