const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Dummy data for demonstration
let tableData = [
  {
    id: 1,
    agentName: 'Super admin',
    agentPhoneNumber: '7845411212121',
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
    agentName: 'Ronak',
    agentPhoneNumber: '784514564',
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
];

// Endpoint to update table data
app.post('/api/updateData', (req, res) => {
  const { id, updatedRow } = req.body;
  tableData = tableData.map(row => (row.id === id ? { ...row, ...updatedRow } : row));
  res.send({ success: true, tableData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
