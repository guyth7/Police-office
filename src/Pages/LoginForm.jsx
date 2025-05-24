import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Icon library (optional)

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.includes("@") || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "يرجى إدخال عنوان بريد إلكتروني صالح";
    }

    // Password validation
    const password = formData.password;
    if (password.length < 6) {
      newErrors.password = "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "يجب أن تحتوي كلمة المرور على حرف صغير";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "يجب أن تحتوي كلمة المرور على حرف كبير";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "يجب أن تحتوي كلمة المرور على رقم";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Login Form Data:", formData);
    // Call your login API here
  };

  return (
    <section className="gardient-bg bg-cover bg-no-repeat w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden sm:max-w-md w-full">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-4">
            تسجيل الدخول
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-1 font-medium text-gray-700"
              >
                البريد الإلكتروني
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ادخل البريد الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm mb-1 font-medium text-gray-700"
              >
                كلمة السر
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="ادخل كلمة السر"
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-2 pr-2 flex items-center text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                تسجيل الدخول
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
