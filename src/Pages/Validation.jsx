import * as Yup from "yup";

export const Validation = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  first_name: Yup.string()
    .min(2, "First Name Must be At Least 2 Character" )
    .max(10)
    .matches(/^[A-Za-z ]*$/, "Please enter valid firt name")
    .required("Please Enter First Name"),
  last_name: Yup.string()
    .min(2, "Last Name Must be At Least 2 Character")
    .max(10)
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .required("Please Enter Last Name"),
  password: Yup.string()
    .min(6, "Password is too short - should be 6 chars minimum.")
    .max(16, "Password Not More than 16 Character")
    .required("Please Enter Password"),
});
