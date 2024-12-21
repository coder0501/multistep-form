# Multistep Form with Loan Amount Slider

This project is a **React TypeScript** application featuring a multistep form for collecting user information. The form allows users to navigate through different steps, enter details like zip code, project type, roofing type, and loan amount, and finally submit the form with a loading indicator on the last page.

---

## Features

- **Dynamic Multistep Form**: Navigate through steps with `Next` and `Previous` buttons.
- **Loan Amount Slider**: 
  - Allows users to select a loan amount between `$100` and `$35,000` using a slider.
  - Slider is pre-filled with a default value, and the track is dynamically styled with a cyan (`#00ffff`) color up to the selected range.
- **Phone Number Validation**: Ensures only integers of 10 or more digits are allowed.
- **Loading Indicator**: Shows a loading spinner when the form is submitted.
- **Responsive Design**: Fully functional across various screen sizes.

---

## Tech Stack

- **React**: Frontend framework for building UI.
- **TypeScript**: For type-safe coding.
- **CSS**: Used for custom slider styling and responsiveness.
- **Vite**: Development environment for fast builds and hot module replacement.

---

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/multistep-form.git
   cd multistep-form

### Install dependencies:
npm install

### Start the development server:
npm run dev

### Open the app in your browser:
http://localhost:5173

## File Structure

multistep-form/
## ├── src/
### │   ├── components/
│   │   ├── MultiStepForm.tsx  # Main multistep form component
│   │   ├── ProgressBar.tsx    # Progress bar component
│   │   ├── steps/
│   │   │   ├── ZipCodeStep.tsx         # Step 1: Zip code input
│   │   │   ├── ProjectTypeStep.tsx    # Step 2: Select project type
│   │   │   ├── RoofingTypeStep.tsx    # Step 3: Select roofing type
│   │   │   └── LoanAmountStep.tsx     # Step 4: Loan amount slider
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles/
│   │   └── heroSection.css  # Slider and form styles
│   └── index.html
├── public/
│   ├── images/
│   │   ├── home-banner-img.png
│   │   └── home-banner-bg-img.png
├── package.json
├── tsconfig.json
└── README.md

## Usage
Navigate through the steps by filling in the required fields:
Step 1: Enter a valid zip code.
Step 2: Select the type of project.
Step 3: Select the roofing type.
Step 4: Use the slider to choose a loan amount.
Submit the form to see the final loading indicator.

## Customization
### Loan Amount Range: Modify the range in LoanAmountStep.tsx:
<input
  type="range"
  min="100"
  max="35000"
  step="10"
  ...
/>

### Slider Track Color: Change the color in heroSection.css:
background: linear-gradient(to right, #00ffff var(--slider-progress), #e0e0e0 0%);
