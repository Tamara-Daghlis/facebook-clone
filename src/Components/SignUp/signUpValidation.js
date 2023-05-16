export const validate = (userInfo) => {
  const { firstName, lastName, email, password } = userInfo;
  const errors = {};

  if (firstName === "") {
    errors.firstNameError = "This field is required";
  } else if (!/^[A-Za-z]+$/.test(firstName)) {
    errors.lastNameError = "Invalid name given";
  }

  if (lastName === "") {
    errors.lastNameError = "This field is required";
  } else if (!/^[A-Za-z]+$/.test(lastName)) {
    errors.lastNameError = "Invalid name given";
  }

  if (email === "") {
    errors.emailError = "This field is required";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.emailError = "Invalid Email";
  }

  if (password === "") {
    errors.passwordError = "This field is required";
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
    errors.passwordError = "Invalid Password";
  }

  return errors;
};
