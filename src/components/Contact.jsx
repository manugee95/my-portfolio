import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useState } from "react";
import useAlert from "../hooks/useAlert";

function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { alertInfo, showAndHide } = useAlert();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!executeRecaptcha) {
      console.error("reCAPTCHA not ready");
      showAndHide("error", "Error with reCAPTCHA. Please refresh the page.");
      setLoading(false);
      return;
    }

    // Get reCAPTCHA token
    const token = await executeRecaptcha("submit");

    try {
      const response = await fetch(
        "https://my-portfolio-backend-n4x7.onrender.com/api/contact-me",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            captchaToken: token,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        showAndHide("success", "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: null,
        });
      } else {
        showAndHide("error ", "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="contact" id="contact">
      <h1>Get In Touch</h1>
      {alertInfo.show && (
        <div
          style={{
            backgroundColor:
              alertInfo.type === "success" ? "#28a745" : "#dc3545",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            marginBottom: "10px",
            width: "50%",
            margin: "auto",
          }}
        >
          {alertInfo.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <p>Have a question or want to hire me? Feel free to reach out.</p>
        <div className="formfields">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

const ContactWrapper = () => (
  <GoogleReCaptchaProvider reCaptchaKey="6LdpXfMqAAAAAHphnmaVy0ZZwcv1Lvq9PhY8psWd">
    <Contact />
  </GoogleReCaptchaProvider>
);

export default ContactWrapper;
