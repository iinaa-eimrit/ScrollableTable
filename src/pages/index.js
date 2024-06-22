import React from 'react';
import ScrollableTable from '../components/ScrollableTable';
import './index.css';

const data = [
  {
    agentName: 'Ronak Pareek',
    agentPhone: '1234567890',
    leadDate: '2024-05-01',
    leadSource: 'Online',
    buyerName: 'John Doe',
    buyerPhone: '9876543210',
    buyerEmail: 'john@example.com',
    nationality: 'UAE',
    passportNumber: 'A12345678',
    propertyType: 'Apartment',
    unitPrice: '500,000 AED',
    commission: '5%',
    dealStatus: 'Closed',
    propertyLocation: 'Downtown Dubai',
    agentEmail: 'ronak@example.com',
  },
  {
    agentName: 'Ehsan Virk',
    agentPhone: '1234567891',
    leadDate: '2024-06-01',
    leadSource: 'Referral',
    buyerName: 'Jane Doe',
    buyerPhone: '9876543211',
    buyerEmail: 'jane@example.com',
    nationality: 'UAE',
    passportNumber: 'B12345678',
    propertyType: 'Villa',
    unitPrice: '1,200,000 AED',
    commission: '6%',
    dealStatus: 'Pending',
    propertyLocation: 'Palm Jumeirah',
    agentEmail: 'ehsan@example.com',
  },
  // Add more data objects as needed
];

const columns = [
  { Header: 'Agent Name', accessor: 'agentName' },
  { Header: 'Agent Phone', accessor: 'agentPhone' },
  { Header: 'Date of Lead', accessor: 'leadDate' },
  { Header: 'Lead Source', accessor: 'leadSource' },
  { Header: 'Buyer Full Name', accessor: 'buyerName' },
  { Header: 'Buyer Phone Number', accessor: 'buyerPhone' },
  { Header: 'Buyer Email', accessor: 'buyerEmail' },
  { Header: 'Nationality', accessor: 'nationality' },
  { Header: 'Passport Number', accessor: 'passportNumber' },
  { Header: 'Property Type', accessor: 'propertyType' },
  { Header: 'Unit Price', accessor: 'unitPrice' },
  { Header: 'Commission %', accessor: 'commission' },
  { Header: 'Deal Status', accessor: 'dealStatus' },
  { Header: 'Property Location', accessor: 'propertyLocation' },
  { Header: 'Agent Email', accessor: 'agentEmail' },
];

const TheTable = () => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={index < 4 ? 'sticky-left' : index >= columns.length - 2 ? 'sticky-right' : ''}
              style={{ zIndex: index < 4 ? 3 : index >= columns.length - 2 ? 2 : 1 }}
            >
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className={colIndex < 4 ? 'sticky-left' : colIndex >= columns.length - 2 ? 'sticky-right' : ''}>
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Home = () => {
  return (
    <div>
      <h1>Scrollable Table</h1>
      <ScrollableTable columns={columns} data={data} />
    </div>
  );
};

export default Home;