import { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../_organisms/Mainlayout";
import * as Yup from "yup";
import { useFormik } from "formik";
import CheckoutBilling from "../../_atoms/CheckoutBilling/CheckoutBilling";
import Card from "../../_atoms/CheckoutCard/Card";

const CheckoutComponent = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { countries, cart } = context;
  const [value, setValue] = useState("");
  const [states, setStates] = useState<states[]>([]);
  const [validationSchema, setValidationSchema] = useState(Yup.object());
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  useEffect(() => {
    const filteredStates = countries
      .filter((item) => item.name === value)
      .flatMap((item) => item.states);
    setStates(filteredStates);
  }, [value, countries]);

  useEffect(() => {
    setValidationSchema(buildValidationSchema);
    formik.validateForm();
  }, []);

  const buildValidationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters"),
    Adress: Yup.string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters"),
    zip: Yup.string()
      .required("ZIP code is required")
      .min(3, "ZIP code is too short")
      .max(10, "ZIP code is too long"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .min(4, "Phone number must be at least 4 digits")
      .max(15, "Phone number must be no more than 15 digits"),
    state: Yup.string(),
    country: Yup.string()
      .required("Country is required")
      .min(3, "Country name must be at least 3 characters"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    Adress: "",
    zip: "",
    email: "",
    phoneNumber: "",
    state: "",
    country: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
      alert(`Order placed with ${paymentMethod}`);
    },
  });
  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const calculateSubtotal = (item: DataType) => {
    return (item.price * (item.count ?? 1)).toFixed(2);
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + parseFloat(calculateSubtotal(item)), 0)
      .toFixed(2);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="flex justify-around p-4">
      <CheckoutBilling
        formik={formik}
        setValue={setValue}
        countries={countries}
        states={states}
      />
      <Card
        cart={cart}
        calculateTotal={calculateTotal}
        calculateSubtotal={calculateSubtotal}
        paymentMethod={paymentMethod}
        handlePaymentMethodChange={handlePaymentMethodChange}
      />
    </form>
  );
};

export default CheckoutComponent;
