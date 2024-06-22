import React, { useState } from 'react';
import axios from 'axios';
import EditableDate from './EditableDate';
import ImageModal from './ImageModal';

const ScrollableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      agentName: 'Virat Kohli',
      agentPhoneNumber: '1818181818',
      dateOfLeadCreated: '2024-06-06',
      col1: 'Data 1',
      col2: 'Data 2',
      col3: 'Data 3',
      col4: 'Data 4',
      col5: 'Data 5',
      col6: 'Data 6',
      col7: 'Data 7',
      col8: 'Data 8',
      col9: 'Data 9',
      col10: 'Data 10',
      col11: 'Data 11',
      col12: 'Data 12',
      col13: 'Data 13',
      col14: 'Data 14',
      col15: 'Data 15',
      col16: 'Data 16',
      col17: 'Data 17',
      col18: 'Data 18',
      col19: 'Data 19',
      col20: 'Data 20',
      uaeResident: 'No',
    },
    {
      id: 2,
      agentName: 'Rohit Sharma',
      agentPhoneNumber: '4545454545',
      dateOfLeadCreated: '2024-06-07',
      col1: 'Data 21',
      col2: 'Data 22',
      col3: 'Data 23',
      col4: 'Data 24',
      col5: 'Data 25',
      col6: 'Data 26',
      col7: 'Data 27',
      col8: 'Data 28',
      col9: 'Data 29',
      col10: 'Data 30',
      col11: 'Data 31',
      col12: 'Data 32',
      col13: 'Data 33',
      col14: 'Data 34',
      col15: 'Data 35',
      col16: 'Data 36',
      col17: 'Data 37',
      col18: 'Data 38',
      col19: 'Data 39',
      col20: 'Data 40',
      uaeResident: 'No',
    },
  ]);

  const handleInputChange = (e, rowIndex, column) => {
    const newData = [...data];
    newData[rowIndex][column] = e.target.value;
    setData(newData);
  };

  const saveDate = async (rowIndex, date) => {
    const newData = [...data];
    newData[rowIndex].dateOfLeadCreated = date;
    setData(newData);

    await updateData(rowIndex);
  };

  const updateData = async (rowIndex) => {
    const updatedRow = data[rowIndex];
    try {
      const response = await axios.post('/api/updateData', {
        id: updatedRow.id,
        updatedRow,
      });
      console.log('Update successful:', response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="table-container">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="sticky-col left-0">#</th>
            <th className="sticky-col left-1">Agent Name</th>
            <th className="sticky-col left-2">Agent Phone Number</th>
            <th className="sticky-col left-3">Date of Lead Created</th>
            {Array.from({ length: 20 }, (_, i) => (
              <th key={`col-${i}`} className="scrollable-col">Column {i + 1}</th>
            ))}
            <th className="sticky-col right-1">UAE Resident</th>
            <th className="sticky-col right-0">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="sticky-col left-0">{row.id}</td>
              <td className="sticky-col left-1">
                <input
                  type="text"
                  value={row.agentName}
                  onChange={(e) => handleInputChange(e, rowIndex, 'agentName')}
                  onBlur={() => updateData(rowIndex)}
                />
              </td>
              <td className="sticky-col left-2">
                <input
                  type="text"
                  value={row.agentPhoneNumber}
                  onChange={(e) => handleInputChange(e, rowIndex, 'agentPhoneNumber')}
                  onBlur={() => updateData(rowIndex)}
                />
              </td>
              <td className="sticky-col left-3">
                <EditableDate initialDate={row.dateOfLeadCreated} onSave={(date) => saveDate(rowIndex, date)} />
              </td>
              {Array.from({ length: 20 }, (_, i) => (
                <td key={`col-${i}`} className="scrollable-col">
                  <input
                    type="text"
                    value={row[`col${i + 1}`]}
                    onChange={(e) => handleInputChange(e, rowIndex, `col${i + 1}`)}
                    onBlur={() => updateData(rowIndex)}
                  />
                </td>
              ))}
              <td className="sticky-col right-1">
                <input
                  type="text"
                  value={row.uaeResident}
                  onChange={(e) => handleInputChange(e, rowIndex, 'uaeResident')}
                  onBlur={() => updateData(rowIndex)}
                />
              </td>
              <td className="sticky-col right-0">
                <ImageModal />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollableTable;
