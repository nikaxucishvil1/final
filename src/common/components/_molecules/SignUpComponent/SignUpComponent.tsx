import { useFormik } from "formik";
import Button from "../../_atoms/Button/Button";
import Input from "../../_atoms/Input/Input";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { GlobalState } from "../../_organisms/Mainlayout";

const SignUpComponent = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { setUsers, Users } = context;
  const [validationSchema, setValidationSchema] = useState(Yup.object());
  useEffect(() => {
    setValidationSchema(buildValidationSchema);
    formik.validateForm();
  }, []);
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
        setUsers([...Users,formik.values.email , formik.values.password])
    },
  });
  const buildValidationSchema = Yup.object({
    email: Yup.string().email(),
    password: Yup.string().min(8).max(16),
  });

  return (
    <div className="flex flex-col items-center gap-10">
      <Input
        type="text"
        name="firstName"
        placeholder="Email"
        className="p-2 border rounded-md w-[400px]"
      />
      <Input
        type="text"
        name="firstName"
        placeholder="Password"
        className="p-2 border rounded-md w-[400px]"
      />
      <Button className="flex w-full items-center justify-center gap-3 px-6 py-3 text-white bg-[#00B207] rounded-full">
        Register
      </Button>
    </div>
  );
};

export default SignUpComponent;
