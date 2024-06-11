import { useFormik } from "formik";
import Button from "../../_atoms/Button/Button";
import Input from "../../_atoms/Input/Input";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { GlobalState } from "../../_organisms/Mainlayout";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase/Firebase-config";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { setIsLogedIn, setLogedUser,setCategory,setNav } = context;
  const navigate = useNavigate();

  const buildValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .required("Required"),
  });

  const [validationSchema, setValidationSchema] = useState(buildValidationSchema);

  useEffect(() => {
    setValidationSchema(buildValidationSchema);
  }, []);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        setLogedUser(auth.currentUser?.email);
        setIsLogedIn(true);
        navigate("/");
        setNav("Home");
        setCategory("")
      } catch (error) {
        console.error(error, "error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-10">
      <Input
        type="text"
        name="email"
        onchange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Email"
        className="p-2 border rounded-md w-[400px]"
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <p className="text-red-500">{formik.errors.email}</p>
      )}
      <Input
        type="password"
        name="password"
        onchange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Password"
        className="p-2 border rounded-md w-[400px]"
        value={formik.values.password}
      />
      {formik.errors.password && formik.touched.password && (
        <p className="text-red-500">{formik.errors.password}</p>
      )}
      <Button
        type="submit"
        className="flex w-full items-center justify-center gap-3 px-6 py-3 text-white bg-[#00B207] rounded-full"
      >
        Register
      </Button>
    </form>
  );
};

export default SignUpComponent;
