"use client";
import styles from "./Common.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ContactForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const { username, email, phone, message } = data

  const [status, setStatus] = useState(null);

  const handleChange = e =>
  setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData("");

    try {
      const response = await fetch("https://v1.nocodeapi.com/mujjupalaan/google_sheets/KDlCxnByISmWVuhY?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[username, email, phone, new Date().toLocaleString(), message]]),
      });
      if (response.status === 200) {
        setData({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    }
    catch (err) {
      console.log(err);
    }
  };
      // Set the status based on the response from the API route
  //     if (response.status === 200) {
  //       setUser({
  //         username: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //       });
  //       setStatus("success");
  //     } else {
  //       setStatus("error");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={username}
            onChange={handleChange}
            required
            style={{msContentZooming:'none'}}
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={email}
            onChange={handleChange}
            required
            autoComplete="off"
            style={{msContentZooming:'none'}}
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone"
            className={mulish.className}
            value={phone}
            onChange={handleChange}
            required
            autoComplete="off"
            style={{msContentZooming:'none'}}
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Enter your Message"
            className={mulish.className}
            value={message}
            onChange={handleChange}
            required
            autoComplete="off"
            style={{msContentZooming:'none'}}
          />
        </label>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}

        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
