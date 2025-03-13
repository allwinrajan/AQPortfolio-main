import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Added state for phone number
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();

    // Function to get current date and time
    const getCurrentDate = () => {
      return new Date().toLocaleString();
    };

  const sendEmail = (e) => {
    e.preventDefault();

   // Set the hidden date input field's value
   form.current.date.value = getCurrentDate();

    emailjs
      .sendForm("service_c1dbc5l", "template_6l4fego", form.current, {
        publicKey: "7myiYDLoS4TsBTq1o",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setPhone(""); // Reset phone field
          setMessage("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="tel"
          name="from_phone"
          placeholder="Your Phone Number"
          required
          pattern="[0-9]{10}" // Ensures 10-digit phone number
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />

              {/* Hidden input for the date */}
              <input type="hidden" name="date" />

        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
