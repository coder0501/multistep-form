import React, { useState } from "react";
import Swal from "sweetalert2";
import ProgressBar from "./ProgressBar";
import ZipCodeStep from "./ZipCodeStep";
import PhoneNumberStep from "./PhoneNumberStep";
import ProjectTypeStep from "./ProjectTypeStep";
import RoofingTypeStep from "./RoofingTypeStep";
import ReviewSubmitStep from "./ReviewSubmitStep";

type FormData = {
    zipCode: string;
    phoneNumber: string;
    email: string;
    projectType: string;
    roofingType: string;
};

const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        zipCode: "",
        phoneNumber: "",
        email: "",
        projectType: "",
        roofingType: "",
    });
    const [loading, setLoading] = useState(false);

    const handleFinalSubmit = () => {
        Swal.fire({
            title: "Submission Successful!",
            text: "Your information has been submitted successfully.",
            icon: "success",
            confirmButtonText: "OK",
        });
    };

    const handleNext = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
        } else {
            setLoading(true);
            setTimeout(() => {
                Swal.fire({
                    title: "Submission Successful!",
                    text: "Your information has been submitted successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                setLoading(false);
            }, 2000);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <section>
            <div className="mutlistep-form">
                <div className="form-container">
                    <ProgressBar step={currentStep} totalSteps={5} />
                    {loading ? (
                        <div className="loading-indicator">Submitting...</div>
                    ) : (
                        <>
                            {currentStep === 1 && (
                                <ZipCodeStep
                                    formData={formData}
                                    setFormData={setFormData}
                                    onNext={handleNext}
                                />
                            )}
                            {currentStep === 2 && (
                                <PhoneNumberStep
                                    formData={formData}
                                    setFormData={setFormData}
                                    onNext={handleNext}
                                    onBack={handleBack}
                                />
                            )}
                            {currentStep === 3 && (
                                <ProjectTypeStep
                                    formData={formData}
                                    setFormData={setFormData}
                                    onNext={handleNext}
                                    onBack={handleBack}
                                />
                            )}
                            {currentStep === 4 && (
                                <RoofingTypeStep
                                    formData={formData}
                                    setFormData={setFormData}
                                    onNext={handleNext}
                                    onBack={handleBack}
                                />
                            )}
                            {currentStep === 5 && (
                                <ReviewSubmitStep
                                    formData={formData}
                                    onBack={handleBack}
                                    onSubmit={handleFinalSubmit}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MultiStepForm;