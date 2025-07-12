import React from 'react'
import AddForm from './AddForm'

const EditModal = ({ isOpen, onClose, rowData, onSave }) => {
  if (!isOpen) return null;

  const handleSubmit=(updatedData)=>{
    onSave(updatedData);
    onClose();
  };

  return (
    <div>
      <AddForm
      onSave={handleSubmit}
      defaultValues={rowData}
      onClose={onClose}
    />
    </div>
  )
}

export default EditModal
