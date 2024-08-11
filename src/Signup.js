import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "email") {
      const isValidEmail = value.includes("@");
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: isValidEmail ? "" : "Please enter a valid email.",
      }));
    }

    if (name === "password" || name === "confirmPassword") {
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
      const isValidPassword = passwordPattern.test(formData.password);
      const passwordsMatch = formData.password === formData.confirmPassword;

      setErrors((prevErrors) => ({
        ...prevErrors,
        password: isValidPassword
          ? ""
          : "Password must contain at least one uppercase letter, one number, and be at least 8 characters long.",
        confirmPassword: passwordsMatch ? "" : "Passwords do not match.",
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email.";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    if (validateForm()) {
      toast.success("Signup successful!");
      navigate(
        "/                                                                                                                                                                              "
      );
    } else {
      if (errors.firstName) toast.error(errors.firstName);
      if (errors.lastName) toast.error(errors.lastName);
      if (errors.email) toast.error(errors.email);
      if (errors.phone) toast.error(errors.phone);
      if (errors.password) toast.error(errors.password);
      if (errors.confirmPassword) toast.error(errors.confirmPassword);
      if (errors.termsAccepted) toast.error(errors.termsAccepted);
    }
  };

  return (
    <div className="container mt-5">
      <div className="Signup">
        <h2 className="h2s">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="passform1">
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="mb-3 maform">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-5">
            <label className="form-label">Phone Number</label>
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass={`form-control ${errors.phone ? "is-invalid" : ""}`}
              enableSearch={true}
            />
            {errors.phone && (
              <div className="invalid-feedback d-block">{errors.phone}</div>
            )}
          </div>
          <div className="passform ">
            <div className="m-1">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className=" m-2 ">
              <label className="form-label">Confirm Password</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className={`form-check-input ${
                errors.termsAccepted ? "is-invalid" : ""
              }`}
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label className="form-check-label term">
              By registering I confirm I have read and agree to the Cuddle{" "}
              <span className="terms">Terms of Use</span>. We send occasional
              marketing messages which can be switched off in account settings.
              We manage personal data as set out in our Privacy Notice.
            </label>
            {errors.termsAccepted && (
              <div className="invalid-feedback d-block">
                {errors.termsAccepted}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-danger">
            Signup
          </button>
        </form>
        <footer className="mt-4 foots">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
