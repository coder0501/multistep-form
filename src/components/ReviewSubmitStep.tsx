import React, { useState } from "react";

type ReviewSubmitStepProps = {
  formData: {
    zipCode: string;
    email: string;
    phoneNumber: string;
    projectType: string;
    roofingType: string;
  };
  onBack: () => void;
  onSubmit: () => void;
};

const ReviewSubmitStep: React.FC<ReviewSubmitStepProps> = ({
  formData,
  onBack,
  onSubmit,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsLoading(false);
      onSubmit(); // Call the main submit function
    }, 2000); // Adjust delay as needed
  };

  return (
    <div className="step">
      <h2>Review and Submit</h2>
      <p>Please review your details before submission:</p>
      <ul>
        <li>Zip Code: {formData.zipCode}</li>
        <li>Email: {formData.email}</li>
        <li>Phone Number: {formData.phoneNumber}</li>
        <li>Project Type: {formData.projectType}</li>
        <li>Roofing Type: {formData.roofingType}</li>
      </ul>
      {isLoading ? (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Submitting your information...</p>
        </div>
      ) : (
        <div className="btn-group">
          <button className="back-btn" onClick={onBack}>
            Back
          </button>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewSubmitStep;
