import React, { useState } from 'react';

const EditableDate = ({ initialDate, onSave }) => {
  const [date, setDate] = useState(initialDate);
  const [isEditing, setIsEditing] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const saveDate = () => {
    setIsEditing(false);
    onSave(date);
  };

  return isEditing ? (
    <input
      type="date"
      value={date}
      onChange={handleDateChange}
      onBlur={saveDate}
    />
  ) : (
    <span onClick={() => setIsEditing(true)}>{date}</span>
  );
};

export default EditableDate;
