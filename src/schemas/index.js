import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup.string().min(5).matches(passwordRules, {
    message: "Please create a stronger password",
  }).required("Required"),
  confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Password must match').required("Required")
});
