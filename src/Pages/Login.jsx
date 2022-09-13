import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMailOutline, MdLock } from "react-icons/md";
import axios from "axios";
import { useFormik } from "formik";
import { Validation } from "./Validation";
import { baseurl } from "./Signup";

const initialState = {
  email: "deepak@gmail.com",
  password: "12345678",
};

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const signin = async () => {
    const url = `${baseurl}auth/login`;
    try {
      const res = await axios.post(url, data);
      localStorage.setItem("customToken", res.data.data.customToken);
      alert("Login SuccessFully");
      navigate("/task");
      setData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex bg-red-100 h-screen w-[100vw] justify-center items-center">
        <div class=" ">
          <div class=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
            <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
              Welcome Back
            </div>
            <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
              Enter your credentials to access your account
            </div>

            <div class="mt-10">
              <div>
                <div class="flex flex-col mb-5">
                  <label for="email" class={style.label}>
                    E-Mail Address:
                  </label>
                  <div class="relative">
                    <div class={style.div}>
                      <MdOutlineMailOutline />
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      class={style.input}
                      placeholder="Enter your email"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <label for="password" class={style.label}>
                    Password:
                  </label>
                  <div class="relative">
                    <div class={style.div}>
                      <span>
                        <MdLock />
                      </span>
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      class={style.input}
                      placeholder="Enter your password"
                      value={data.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div class="flex w-full">
                  <button onClick={signin} type="submit" class={style.submit}>
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center mt-6">
            <a class=" inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span class="ml-2">
                You don't have an account?
                <a
                  onClick={() => {
                    navigate("/signup");
                  }}
                  class="text-xs ml-2 cursor-pointer text-blue-500 font-semibold"
                >
                  Register now
                </a>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export const style = {
  input:
    "text-sm bg-white placeholder-gray-400 text-black pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",
  div: " inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400",
  label: "mb-1 text-xs sm:text-sm tracking-wide text-gray-600",
  submit:
    " flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in",
};

export default Login;
