import React from "react";

type ProjectTypeStepProps = {
  formData: { projectType: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
  onBack: () => void;
};

const ProjectTypeStep: React.FC<ProjectTypeStepProps> = ({
  formData,
  setFormData,
  onNext,
  onBack,
}) => {
  const validateProjectType = () => {
    if (!formData.projectType) {
      alert("Please select a project type.");
      return false;
    }
    return true;
  };

  return (
    <div className="step">
      <h2>Select Project Type</h2>
      <select
        value={formData.projectType}
        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
      >
        <option value="">Select</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
      </select>
      <div className="btn-group">
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
        <button
          className="next-btn"
          onClick={() => validateProjectType() && onNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectTypeStep;
