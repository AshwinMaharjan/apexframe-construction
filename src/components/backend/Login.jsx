import React, { useContext, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    const res = await fetch("http://localhost:8000/api/authenticate", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.status == false) {
      toast.error(result.message);
    } else {
      const userInfo = {
        id: result.id,
        token: result.token,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      login(userInfo);
      navigate("/admin/dashboard");
    }
    // console.log(result);
  };
  return (
    <>
      <Header />
      <main>
        <section className="section-12">
          <div className="login-wrapper">
            <div className="login-card">
              {/* Logo / Brand */}
              <div className="login-card__brand">
                <span className="login-card__logo">
                  APEX<span>FRAME</span>
                </span>
                <p>Welcome back — sign in to your account</p>
              </div>

              {/* Form */}
              <form
                className="login-card__form"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className={`form-control ${errors.email && "is-invalid"}`}
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="invalid-feedback">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div className="form-group">
                  <div className="label-row">
                    <label htmlFor="password">Password</label>
                    <a href="/forgot-password" className="forgot-link">
                      Forgot password?
                    </a>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      className={`form-control ${errors.password && "is-invalid"}`}
                      {...register("password", {
                        required: "This field is required",
                      })}
                    />
                    {errors.password && (
                      <p className="invalid-feedback">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Remember Me */}
                <div className="remember-row">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                </div>

                {/* Submit */}
                <button type="submit" className="login-card__submit">
                  Sign In →
                </button>

                {/* Register link */}
                <p className="login-card__register">
                  Don't have an account? <a href="/register">Create one here</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
