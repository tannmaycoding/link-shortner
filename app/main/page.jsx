"use client"
import Link from "next/link";
import { useState } from "react";
import React from "react";

const Main = () => {
  const [form, setForm] = useState({ url: "", short: "" })
  const [show, setShow] = useState(false)
  const [url, seturl] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!name) return;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const generate = async () => {
    try {

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: form.url,
          short: form.short
        })
      })

      const result = await response.json()

      if (result.success) {
        seturl(form.short)
        setShow(true)
        setSuccess(true)
      }

      setForm({ url: "", short: "" })

    } catch (error) {
      console.error(error)
      setSuccess(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-6 items-center justify-center p-6">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Shorten Your Links
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Paste a long URL below and create a short and easy-to-share link.
        </p>

        <div className="space-y-4">

          <div className="flex flex-col">
            <label htmlFor="url" className="font-semibold mb-1 text-gray-800">
              URL to shorten
            </label>

            <input
              type="text"
              id="url"
              name="url"
              value={form.url}
              onChange={handleChange}
              placeholder="https://example.com/very-long-link"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 text-gray-800 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="short" className="font-semibold mb-1 text-gray-800">
              Custom Short Text
            </label>

            <input
              type="text"
              id="short"
              name="short"
              value={form.short}
              onChange={handleChange}
              placeholder="my-link"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 text-gray-800 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generate}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Generate Short Link
          </button>

        </div>

        <div className="mt-6 text-sm text-gray-800 text-center">
          Example: <span className="font-semibold">https://link-shortner-gold-iota.vercel.app/link/my-link</span>
        </div>

      </div>

      <div className="bg-white text-gray-800 p-4 rounded-xl shadow-lg text-center">

        {!show && "Your Shortened Link Will Come Here"}

        {show && success && (
          <div>
            <p className="mb-2 font-semibold text-green-600">
              Link Generated Successfully 🎉
            </p>

            <Link
              className="text-blue-600 underline"
              href={`/link/${url}`}
            >
              {process.env.NEXT_PUBLIC_HOST}{url}
            </Link>
          </div>
        )}

      </div>

    </div>
  );
};

export default Main;
