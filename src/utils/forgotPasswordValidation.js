import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter correct email"),
});