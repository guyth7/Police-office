import React, { useState, useEffect } from "react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    gender: "male",
    phone: "",
    id: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisible = () => {
    setShowPassword((prev) => !prev);
  };

  const validate = () => {
    const errors = {};
    const pwd = formData.password;

    if (!formData.email.includes("@")) {
      errors.email = "يجب أن يتضمن البريد الإلكتروني '@'";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "يجب أن يتكون رقم الهاتف من 10 أرقام بالضبط";
    }

    if (!/^\d{11}$/.test(formData.id)) {
      errors.id = "يجب أن يتكون رقم الوطني من 11 أرقام بالضبط";
    }

    if (!/(?=.*[a-z])/.test(pwd) || !/(?=.*[A-Z])/.test(pwd)) {
      errors.password = "يجب أن تحتوي كلمة المرور على أحرف كبيرة وصغيرة";
    }

    if (formData.password !== formData.passwordConfirm) {
      errors.passwordConfirm = "كلمات المرور غير متطابقة.";
    }

    return errors;
  };

  useEffect(() => {
    const errors = validate();
    setFormErrors(errors);
    setIsValid(Object.keys(errors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      console.log("✅ النموذج المقدم:", formData);
    }
  };

  const inputStyle = (field) =>
    `appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm pr-10 ${
      formErrors[field]
        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    }`;

  const renderError = (field) =>
    formErrors[field] && (
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ExclamationCircleIcon
          className="h-5 w-5 text-red-500"
          aria-hidden="true"
        />
      </div>
    );

  const renderErrorText = (field) =>
    formErrors[field] && (
      <p className="text-red-500 text-xs mt-1">{formErrors[field]}</p>
    );

  return (
    <section className="gardient-bg bg-cover bg-no-repeat w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden sm:max-w-md w-full slide-down">
        <div className="px-4 py-5 sm:p-6">
          <div className="text-center text-2xl font-semibold text-gray-900 mb-4">
            إنشاء حساب
          </div>

          {isSubmitted && (
            <div className="flex items-center gap-2 mb-4 text-green-600 font-medium animate-pulse">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              تم إنشاء الحساب بنجاح
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                الاسم
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="username"
                  type="text"
                  required
                  placeholder="ادخل اسمك"
                  value={formData.username}
                  onChange={handleChange}
                  className={inputStyle("username")}
                />
                {renderError("username")}
              </div>
              {renderErrorText("username")}
            </div>

            {/* Gender */}
            <div>
              <label
                htmlFor="ge"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                الجنس
              </label>
              <select
                id="ge"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputStyle("gender")}
              >
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                رقم الجوال
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  required
                  placeholder="ادخل رقم الجوال"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyle("phone")}
                />
                {renderError("phone")}
              </div>
              {renderErrorText("phone")}
            </div>

            {/* ID */}
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                رقم الوطني
              </label>
              <div className="relative">
                <input
                  id="id"
                  name="id"
                  type="number"
                  required
                  placeholder="ادخل رقم الوطني"
                  value={formData.id}
                  onChange={handleChange}
                  className={inputStyle("id")}
                />
                {renderError("id")}
              </div>
              {renderErrorText("id")}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-1 font-medium text-gray-700"
              >
                البريد اللإلكتروني
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ادخل البريد اللإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle("email")}
                />
                {renderError("email")}
              </div>
              {renderErrorText("email")}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="كلمة المرور"
                className="block text-sm mb-1 font-medium text-gray-700"
              >
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="ادخل كلمة المرور"
                  minLength="6"
                  value={formData.password}
                  onChange={handleChange}
                  className={inputStyle("password")}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisible}
                  className="absolute inset-y-0 left-2 flex items-center text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {renderError("password")}
              </div>
              {renderErrorText("password")}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="passwordConfirm"
                className="block text-sm mb-1 font-medium text-gray-700"
              >
                إعادة كتابة كلمة المرور
              </label>
              <div className="relative">
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  required
                  placeholder="أدخل كلمة المرور مرة أخرى"
                  minLength="6"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  className={inputStyle("passwordConfirm")}
                />
                {renderError("passwordConfirm")}
              </div>
              {renderErrorText("passwordConfirm")}
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={!isValid}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isValid
                    ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                    : "bg-gray-400 cursor-not-allowed"
                } focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                إنشاء حساب
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
