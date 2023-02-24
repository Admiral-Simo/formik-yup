import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
  console.log("submitted");
};

const BasicForm = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors)

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        id="age"
        type="number"
        placeholder="Enter your Age"
        onBlur={handleBlur}
      />
      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <label htmlFor="confirm_password">Confirm Password</label>
      <input
        value={values.confirm_password}
        onChange={handleChange}
        id="confirm_password"
        type="confirm_password"
        placeholder="Enter your confirm_password"
      />
      <button type="submit">submit</button>
    </form>
  );
};
export default BasicForm;
