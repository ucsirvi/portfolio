import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceid = import.meta.env.VITE_SERVICEID;
  const templateid = import.meta.env.VITE_TEMPLATEID;
  const publickey = import.meta.env.VITE_PUBLICKEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(serviceid, templateid, formData, publickey)
      .then(() => {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setErrorMessage("Failed to send the message. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <section className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-400 mb-8">
          Have any questions or want to work together? Fill out the form below,
          and I’ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {successMessage && (
          <p className="mt-4 text-green-500 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
