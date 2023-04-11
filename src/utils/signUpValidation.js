import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string().required("Input your first name"),
  lastName: Yup.string().required("Input your last name"),
  email: Yup.string().email().required("Input your email"),
  companyName: Yup.string().required("Input company name"),
  dbTable: Yup.string().required("Select Number of Db Tables"),
  dbServer: Yup.string().required("Select Number of Db server"),
  password: Yup.string().min(8, "Password must me at least 8 characters").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
    'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
  ).required("Please enter your password"),

});