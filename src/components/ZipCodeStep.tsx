import React from "react";

type ZipCodeStepProps = {
    formData: { zipCode: string };
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    onNext: () => void;
};

const ZipCodeStep: React.FC<ZipCodeStepProps> = ({ formData, setFormData, onNext }) => {
    const validateZipCode = () => {
        if (formData.zipCode.length > 5 || isNaN(Number(formData.zipCode))) {
            alert("Zip code must be Integer with 5 or less.");
            return false;
        }
        return true;
    };

    return (
        <div className="step">
            <div>
                <h2>Enter your Zip Code</h2>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter Zip Code"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                />
            </div>
            <div>
                <button
                    className="next-btn"
                    onClick={() => validateZipCode() && onNext()}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ZipCodeStep;
