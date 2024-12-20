import React from 'react';

interface Step2Props {
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
  onBack: () => void;
}

const Step2: React.FC<Step2Props> = ({ formData, setFormData, onNext, onBack }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    if (!formData.email.includes('@') || formData.phone.length < 10) {
      alert('Please enter valid email and phone number.');
      return;
    }
    onNext();
  };

  return (
    <div>
      <h2>Enter your details</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <button onClick={onBack}>Back</button>
      <button onClick={validateFields}>Next</button>
    </div>
  );
};

export default Step2;
