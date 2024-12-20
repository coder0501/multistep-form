import React from 'react';

interface Step1Props {
  formData: {
    zipCode: string;
    email: string;
    phone: string;
    name: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      zipCode: string;
      email: string;
      phone: string;
      name: string;
    }>
  >;
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData, onNext }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, zipCode: e.target.value });
  };

  const validateZip = () => {
    if (!/^\d{5}$/.test(formData.zipCode)) {
      alert('Please enter a valid ZIP code.');
      return;
    }
    onNext();
  };

  return (
    <div>
      <h2>Enter your ZIP code</h2>
      <input
        type="text"
        placeholder="Enter ZIP Code"
        value={formData.zipCode}
        onChange={handleChange}
      />
      <button onClick={validateZip}>Next</button>
    </div>
  );
};

export default Step1;
