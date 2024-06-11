import Input from "../../_atoms/Input/Input";
import Button from "../../_atoms/Button/Button";
import { GlobalState } from "../../_organisms/Mainlayout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase/Firebase-config";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

const SigninComponent = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { setIsLogedIn, setLogedUser } = context;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (event:any) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLogedUser(auth.currentUser?.email);
      setIsLogedIn(true);
      navigate("/");
    } catch (error) {
      console.error(error, "error");
    }
  };

  return (
    <form className="flex flex-col items-center gap-10" onSubmit={login}>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        className="p-2 border rounded-md w-[400px]"
        onchange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        name="password"
        placeholder="Password"
        className="p-2 border rounded-md w-[400px]"
        onchange={(e) => setPassword(e.target.value)}
      />

      <Button
        type="submit"
        className="flex w-full items-center justify-center gap-3 px-6 py-3 text-white bg-[#00B207] rounded-full"
      >
        Log in
      </Button>
    </form>
  );
};

export default SigninComponent;
