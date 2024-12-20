import React from "react";

type PhoneNumberStepProps = {
    formData: { phoneNumber: string };
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    onNext: () => void;
    onBack: () => void;
};

const PhoneNumberStep: React.FC<PhoneNumberStepProps> = ({
    formData,
    setFormData,
    onNext,
    onBack,
}) => {
    const validatePhoneNumber = () => {
        const regex = /^[0-9]{10,}$/; // Matches 10 or more digits
        if (!regex.test(formData.phoneNumber)) {
            alert("Phone number must be at least 10 digits and contain only numbers.");
            return false;
        }
        return true;
    };

    return (
        <div className="step">
            <h2>Enter your Phone Number</h2>
            <input
                type="tel"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
            <div className="btn-group">
                <button className="back-btn" onClick={onBack}>
                    Back
                </button>
                <button
                    className="next-btn"
                    onClick={() => validatePhoneNumber() && onNext()}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PhoneNumberStep;
