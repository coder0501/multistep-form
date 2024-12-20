import React from "react";

type RoofingTypeStepProps = {
  formData: { roofingType: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
  onBack: () => void;
};

const RoofingTypeStep: React.FC<RoofingTypeStepProps> = ({
  formData,
  setFormData,
  onNext,
  onBack,
}) => {
  const validateRoofingType = () => {
    if (!formData.roofingType) {
      alert("Please select a roofing type.");
      return false;
    }
    return true;
  };

  return (
    <div className="step">
      <h2>Select Roofing Type</h2>
      <select
        value={formData.roofingType}
        onChange={(e) => setFormData({ ...formData, roofingType: e.target.value })}
      >
        <option value="">Select</option>
        <option value="Metal">Metal</option>
        <option value="Asphalt">Asphalt</option>
        <option value="Tile">Tile</option>
        <option value="Slate">Slate</option>
      </select>
      <div className="btn-group">
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
        <button
          className="next-btn"
          onClick={() => validateRoofingType() && onNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RoofingTypeStep;
