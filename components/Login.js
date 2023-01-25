import { signIn } from "next-auth/react";
import Image from "next/image";
import fbLogo from "../assets/images/Facebook-logo.png";

const Login = () => {
  return (
    <div className="grid place-items-center h-[100vh]">
      <Image
        src={fbLogo}
        alt="Facebook Clone Logo"
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
