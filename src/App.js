
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
      <div style={{ "color": "blue", fontSize: 40, fontWeight: "bold", textAlign: 'center' }} > atlan</div>

      {/* dropDown */}
      <div Style="margin:45px">
        <label> Select query from dropdown</label>
        {MyComponent()}
      </div>

      {/* Search bar */}
      <div className='container' Style="margin:30px">
        <div><label> Search your selection</label></div>
        <div><input type="text" placeholder='Search...' className="search" onChange={(e) => setQuery(e.target.value)} /></div>
      </div>

      {/* Table */}
      <div Style="margin:30px" >
        <Table data={search(sampleData)} keys={keys} />
      </div>
    </>
  );
}
export default App;
