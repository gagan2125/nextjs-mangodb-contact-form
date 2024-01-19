"use client";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Full Name:", fullname);
    console.log("Email:", email);
    console.log("Message:", message);

    const res = await fetch("api/contact/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if (success) {
      setFullName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Enter Your Email ID"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>
      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div
            key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
