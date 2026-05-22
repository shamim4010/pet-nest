'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

function RegisterPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      image: userData.image,
      password: userData.password,
      callbackURL: "/login"
    });
    console.log(data, error)
    if (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
      });
    }
    if (data) {
      toast.success('Register Successfull', {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const googleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <div className='w-150 bg-black/4 flex justify-center items-center p-12 rounded-3xl shadow-[0_0_12px_rgba(47,46,190,0.2)]'>
      <div className='flex flex-col gap-4'>
        <h2 className="text-4xl text-white font-medium">Register</h2>
        <p className="text-sm text-gray-500 mt-3">Welcome Please Register to continue</p>

        <button onClick={googleLogin} className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>

        <div className="flex items-center gap-4 w-full my-5">
          <div className="w-full h-px bg-gray-300/90"></div>
          <p className="w-full text-nowrap text-sm text-gray-500/90">or Register with email</p>
          <div className="w-full h-px bg-gray-300/90"></div>
        </div>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            type="text"
          >
            <Label className="text-white">Full Name</Label>
            <Input placeholder="Shamim Miah" className="border border-[#9b9bdf85] focus:border-[#6161c9]" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-white">Email</Label>
            <Input placeholder="john@example.com" className="border border-[#9b9bdf85] focus:border-[#6161c9]" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="image"
            type="text"
          >
            <Label className="text-white">Profil Image Url</Label>
            <Input placeholder="https://imgbb.com/example" className="border border-[#9b9bdf85] focus:border-[#6161c9]" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-white">Password</Label>
            <Input placeholder="Enter your password" className="border border-[#9b9bdf85] focus:border-[#6161c9]" />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="confirmPassword"
            type="password"
            validate={(value, formValues) => {
              if (value !== formValues?.password) {
                return "Passwords not match";
              }
              return null;
            }}
          >
            <Label className="text-white">Confirm Password</Label>
            <Input placeholder="Confirm password" className="border border-[#9b9bdf85] focus:border-[#6161c9]" />
            <FieldError />
          </TextField>
          <div className="flex flex-col">
            <Button type="submit" className="bg">
              <Check />
              Register
            </Button>
            <p className="text-gray-500/90 text-sm mt-4">Don&apos;t have an account? <Link href="/login" className="text-indigo-400 hover:underline">Login</Link></p>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterPage