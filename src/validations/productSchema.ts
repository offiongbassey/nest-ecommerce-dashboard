import * as yup from "yup";

export const productSchema = yup.object({
    name: yup.string().required("Product Title is required"),
    category_id: yup.number().moreThan(0, "Please select a Category").required("Category is required"),
    description: yup.string().min(5, "Provide brief description").required("Description is required"),
    regular_price: yup.number().typeError("Regular Price is required").required("Regular Price is required"),
    promo_price: yup.number().typeError("Promotional Price is required").required("Promo price is required"),
    currency: yup.string().min(1, "Please select a currency").required("Currency is required"),
    tax_rate: yup.number().typeError("Tax Rate is required").required("Tax Rate is required"),
    sub_category_id: yup.number().moreThan(0, "Please select a Sub Category").required("Sub Category is required"),
    quantity: yup.number().typeError("Quantity is required").moreThan(0, "Quantity must be more than 0").required("Quantity is required")
});

export type ProductSchemaType = yup.InferType<typeof productSchema>;