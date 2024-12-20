import React from "react";

type ProgressBarProps = {
  step: number;
  totalSteps: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const percentage = (step / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${percentage}%`, transition: "width 0.3s ease-in-out" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
