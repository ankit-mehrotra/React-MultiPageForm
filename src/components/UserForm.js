import React from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetail from "./FormPersonalDetail";
import Confirm from "./Confirm";
import Success from "./Success";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: "",
};
function UserForm() {
  const [userDetails, setUserDetails] = React.useState(initialState);
  const [step, setStep] = React.useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={userDetails}
        />
      );
    case 2:
      return (
        <FormPersonalDetail
          nextStep={nextStep}
          handleChange={handleChange}
          values={userDetails}
          backbtn={prevStep}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} values={userDetails} backbtn={prevStep} />
      );
    case 4:
      return <Success />;
    default:
      return <div>Hello</div>;
  }
}

export default UserForm;
