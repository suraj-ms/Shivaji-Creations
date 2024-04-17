import DataTable from "react-data-table-component";
import './Table.css'
import { useState } from "react";


export default function Table() {

  const customSort = (rows, field, direction) => {
    return rows.sort((a, b) => {
      const dateA = new Date(
        a[field].split('/').reverse().join('-') // Convert date format to YYYY-MM-DD for consistent comparison
      );
      const dateB = new Date(
        b[field].split('/').reverse().join('-') // Convert date format to YYYY-MM-DD for consistent comparison
      );
      if (direction === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  };
  
 

  const columns = [
    {
      name: "Order Number",
      selector: row => row.orderNumber,
      sortable: true
    },
    {
      name: "Name",
      selector: row => row.name
    },
    {
      name: "Perticulars",
      selector: row => row.perticulars
    },
    {
      name: "Date",
      selector: row => row.date,
      sortable: customSort
    },
    {
      name: "Status",
      selector: row => row.status
    },
  ];

  const data = [
    {
      orderNumber: 101,
      name: "John Doe",
      perticulars: "1p, 2sh",
      date: "10/01/2024",
      status: "Done"
    },
    {
      orderNumber: 102,
      name: "John",
      perticulars: "1p, 2sh, 1sut",
      date: "12/01/2024",
      status: "Done"
    },
    {
      orderNumber: 103,
      name: "Doe",
      perticulars: "1jb, 2py",
      date: "10/02/2024",
      status: "Done"
    },
    {
      orderNumber: 101,
      name: "John Doe",
      perticulars: "1p, 2sh",
      date: "10/03/2024",
      status: "Done"
    },
    {
      orderNumber: 102,
      name: "John",
      perticulars: "1p, 2sh, 1sut",
      date: "12/03/2024",
      status: "Done"
    },
    {
      orderNumber: 103,
      name: "Doe",
      perticulars: "1jb, 2py",
      date: "10/04/2024",
      status: "Done"
    },
    {
      orderNumber: 101,
      name: "John Doe",
      perticulars: "1p, 2sh",
      date: "10/04/2024",
      status: "Done"
    },
    {
      orderNumber: 102,
      name: "John",
      perticulars: "1p, 2sh, 1sut",
      date: "12/04/2024",
      status: "Done"
    },
    {
      orderNumber: 103,
      name: "Doe",
      perticulars: "1jb, 2py",
      date: "10/05/2024",
      status: "Done"
    },
    {
      orderNumber: 101,
      name: "John Doe",
      perticulars: "1p, 2sh",
      date: "10/05/2024",
      status: "Done"
    },
    {
      orderNumber: 102,
      name: "John",
      perticulars: "1p, 2sh, 1sut",
      date: "12/05/2024",
      status: "Done"
    },
    {
      orderNumber: 103,
      name: "Doe",
      perticulars: "1jb, 2py",
      date: "10/06/2024",
      status: "Done"
    },
  ];

 
  
 

  const [searchText, setSearchText] = useState('');

  const filteredItems = data.filter(
    item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.orderNumber.toString().includes(searchText)
  );



 



  return (
    <>

    <input type="text" onChange={e => setSearchText(e.target.value)}/>


      <DataTable columns={columns} data={filteredItems}
      fixedHeader pagination />
    </>
  )
}


