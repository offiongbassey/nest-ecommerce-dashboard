import * as yup from "yup";

export const signUpSchema = yup.object({
    first_name: yup.string().min(4, "First Name must be at least 4 characters").required("First Name is required"),
    last_name: yup.string().min(4, "Last Name must be at least 4 characters").required("Last Name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    phone: yup.string()
    .min(10, "Phone Number must be at least 10 digits")
    .max(15, "Phone Number must not be more than 15 digits").required("Phone Number is required"),
    password: yup.string().min(6, "Password must be atleast 6 characters").required("Password is required")
});

export type SignUpSchemaType =  yup.InferType<typeof signUpSchema>

export const loginSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>