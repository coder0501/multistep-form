import React from "react";

type EmailStepProps = {
  formData: { email: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
  onBack: () => void;
};

const EmailStep: React.FC<EmailStepProps> = ({ formData, setFormData, onNext, onBack }) => {
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  return (
    <div className="step">
      <h2>Enter your Email Address</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <div className="btn-group">
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
        <button
          className="next-btn"
          onClick={() => validateEmail() && onNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmailStep;
