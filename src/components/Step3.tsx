import React from 'react';

interface Step3Props {
  formData: {
    zipCode: string;
    email: string;
    phone: string;
    name: string;
  };
  onSubmit: () => void;
  onBack: () => void;
}

const Step3: React.FC<Step3Props> = ({ formData, onSubmit, onBack }) => {
  return (
    <div>
      <h2>Review Your Information</h2>
      <p>ZIP Code: {formData.zipCode}</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
