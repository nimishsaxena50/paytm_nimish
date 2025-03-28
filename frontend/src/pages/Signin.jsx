import { Heading } from "../Component/Heading";
import { BottomWarning } from "../Component/BottomWarning";
import { SubHeading } from "../Component/SubHeading";
import { InputBox } from "../Component/InputBox";
import { Button } from "../Component/Button";

export const Signin = () => {
  console.log("Signin Component Rendered");
  return (
    <div className="bg-slate-400 h-screen flex justify-center items-center">
      <div className="bg-white border-4 border-red-500 rounded-lg w-80 p-6 shadow-md flex flex-col items-center">
        <Heading title="Sign in" />
        <SubHeading title="Enter your credentials to login to your account" />
        <InputBox title="Email" placeholder="Enter your email eg: john@xyz.com" />
        <InputBox title="Password" placeholder="Enter your password" type="password" />
        <Button label="Sign in" />
        <BottomWarning label="Don't have an account?" buttontext="Sign up" to="/signup" />
      </div>
    </div>
  );
};