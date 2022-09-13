import React from "react";
import { Formik, useFormik } from "formik";
import { style } from "./Login";
import {
  MdOutlineMailOutline,
  MdOutlineAdminPanelSettings,
  MdLock,
} from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Validation } from "./Validation";
import axios from "axios";

const initialState = {
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  admin_type: "",
};
export const baseurl = "http://174.138.21.74:8000/admin/";

const Signup = () => {
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: initialState,
      validationSchema: Validation,
      onSubmit: (values) => {
        register(values);
      },
    });

  const register = async (values) => {
    // e.preventDefault();
    const url = `${baseurl}auth/create_account`;

    try {
      const res = await axios.post(url, values);
      // console.log(res, "log");
      alert("Account Successfully Created");
      navigate("/");
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
              Signup Form
            </div>
            <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
              Enter your Detail to Signup your account
            </div>

            <div class="mt-6">
              <form onSubmit={handleSubmit}>
                <div class="flex flex-col mb-5">
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
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <p className="text-xs text-red-400 p-1">{errors.email}</p>
                  ) : null}
                </div>
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <div class={style.div}>
                      <RiUser3Line />
                    </div>

                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      class={style.input}
                      placeholder="Enter your First Name"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.first_name && touched.first_name ? (
                    <p className="text-xs text-red-400 p-1">
                      {errors.first_name}
                    </p>
                  ) : null}
                </div>
                <div class="flex flex-col mb-5">
                  <div class="relative">
                    <div class={style.div}>
                      <RiUser3Line />
                    </div>

                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      class={style.input}
                      placeholder="Enter your Last Name"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.last_name && touched.last_name ? (
                    <p className="text-xs text-red-400 p-1">
                      {errors.last_name}
                    </p>
                  ) : null}
                </div>
                <div class="flex flex-col mb-6">
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
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <p className="text-xs text-red-400 p-1">
                      {errors.password}
                    </p>
                  ) : null}
                </div>
                <div class="flex flex-col mb-6">
                  <div class="relative">
                    <div class={style.div}>
                      <span>
                        <MdOutlineAdminPanelSettings />
                      </span>
                    </div>

                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.admin_type}
                      class={style.input}
                      name="admin_type"
                      id="admin_type"
                    >
                      <option value="">---Select---</option>
                      <option value="superAdmin">Super Admin</option>
                    </select>
                  </div>
                </div>

                <div class="flex w-full">
                  <button value="signup" type="submit" class={style.submit}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex justify-center items-center mt-6">
            <a class=" inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span class="ml-2">
                You have an Already account?
                <a
                  onClick={() => {
                    navigate("/");
                  }}
                  class="text-xs ml-2 cursor-pointer text-blue-500 font-semibold"
                >
                  Sign in now
                </a>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
