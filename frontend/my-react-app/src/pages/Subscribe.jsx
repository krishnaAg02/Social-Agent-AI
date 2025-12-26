// src/components/SubscribeModal.jsx
import React, { useEffect, useState } from "react";

export default function SubscribeModal({ isOpen, onClose, plan = "" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relatedOption: "AI Video Ads",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [loading, setLoading] = useState(false);

  // Reset form & status whenever modal opens or plan changes
  useEffect(() => {
    if (isOpen) {
      setFormData((f) => ({ ...f, firstName: "", lastName: "", email: "", phone: "", message: "" }));
      setErrors({});
      setStatus("");
    }
  }, [isOpen, plan]);

  // Prevent background scroll while modal open
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
    setStatus("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const resp = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: `Plan: ${plan}\nRelated: ${formData.relatedOption}\n\n${formData.message}`,
        }),
      });

      const data = await resp.json();

      if (resp.ok && data.success) {
        setStatus("success");
        // keep plan visible; clear fields (so next open starts fresh)
        setFormData((p) => ({ ...p, firstName: "", lastName: "", email: "", phone: "", message: "" }));
        setErrors({});
      } else {
        setStatus("error");
        console.error("send-email response", data);
      }
    } catch (err) {
      console.error("Send email error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-6">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-10">
        {/* header */}
        <div className="flex items-start justify-between p-6 border-b">
          <div>
            <h3 className="text-xl font-bold">Get started — <span className="text-indigo-600">{plan || "Plan"}</span></h3>
            <p className="text-sm text-gray-600 mt-1">Fill details and we'll reach out.</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-900 ml-4"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {status === "success" && (
            <div className="mb-4 rounded-md bg-green-50 border border-green-100 text-green-800 px-4 py-3">
              Thank you! We'll contact you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 rounded-md bg-red-50 border border-red-100 text-red-800 px-4 py-3">
              Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.firstName ? "border-red-400" : "border-gray-300"}`}
                />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.lastName ? "border-red-400" : "border-gray-300"}`}
                />
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.email ? "border-red-400" : "border-gray-300"}`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.phone ? "border-red-400" : "border-gray-300"}`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Related option</label>
              <select
                name="relatedOption"
                value={formData.relatedOption}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border px-3 py-2 border-gray-300"
              >
                <option>AI Video Ads</option>
                <option>AI Captions</option>
                <option>Scheduling</option>
                <option>Analytics</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message (optional)</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border px-3 py-2 border-gray-300"
                placeholder="Any details we should know"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending..." : "Submit & Contact Me"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
