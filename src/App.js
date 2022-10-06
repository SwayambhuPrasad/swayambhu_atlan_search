
import { sampleData } from './backend';
import "bootstrap/dist/css/bootstrap.css"
import { React, useState } from 'react';
import Select from 'react-select'
import Table from './table';


function App() {
  const [query, setQuery] = useState("");
  const options = [
    { value: 'Select ', label: 'Select' },
    { value: 'companyName', label: 'SELECT CompanyName FROM Customers' },
    { value: 'contactName', label: 'SELECT CustomerName,Address FROM Customers' },
    { value: 'contactTitle', label: 'SELECT CustomerName,City FROM Customers' },
    { value: 'address', label: 'SELECT ContactName,Phone,Fax FROM Customers' },

  ]
  const val = [["customerID", "companyName", "contactName", "contactTitle", "address", "city", "region", "postalCode", "country", "phone", "fax"],
  ["companyName"], ["companyName", "address"], ["companyName", "city"], ["contactName", "phone", "fax"]];

  const [keys, setKeys] = useState(["customerID", "companyName", "contactName", "contactTitle", "address", "city", "region", "postalCode", "country", "phone", "fax"]);
  const keysForSearch = ["customerID", "companyName", "contactName", "contactTitle", "address", "city", "region", "country", "phone", "fax"];

  const MyComponent = () => (
    <Select options={options} onChange={(e) => {
      options.map((opt, i) => { if (e.value === opt.value) { setKeys(val[i]) } })
    }} />
  )

  const search = (data) => {
    return data.filter(
      item =>
        keysForSearch.some((key) => (item[key].toLowerCase().includes(query)))
    );
  };

  return (
    <>
      {/* header */}
      <header style={{ "border": "grey", "width": "100%", "height": "8em" }} className="shadow p-3 mb-5 bg-white rounded">
        <h1 style={{ "color": "#030EFF", textAlign: 'center', "line-height": "100px", "font-size": "8em" }} >atlan</h1>
      </header>
      {/* dropDown */}
      <div Style="margin:45px">
        <label style={{ "color": "#00688E", "font-size": "1.5em", "font-weight": "bold", "margin-bottom": "10px" }} title="Select a query from dropdown to display the desired table output"> Select a query</label>
        {MyComponent()}
      </div>

      {/* Search bar */}
      <div className='container' Style="margin:30px">
        <div><label style={{ "color": "#00688E", "font-size": "1.5em", "font-weight": "bold", "margin-bottom": "10px" }} title="Search for keywords to display from the table"> Search your selection</label></div>
        <div><input type="text" placeholder='Search...' className="search" onChange={(e) => setQuery(e.target.value)} /></div>
      </div>

      {/* Table */}
      <div Style="margin:30px" >
        <div><label style={{ "color": "#118C77", "font-size": "2em", "font-weight": "bold", "margin-bottom": "10px" }}> Result:</label></div>
        <Table data={search(sampleData)} keys={keys} />
      </div>

      {/* Footer */}
      <div className="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
        © 2022 Copyright:
        <a className="text-dark" href="https://atlan.com/">atlan.com</a>
      </div>
    </>
  );
}
export default App;
