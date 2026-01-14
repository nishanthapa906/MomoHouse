import React, { useState } from 'react'

function MAPandContactus() {

const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    service: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Form Submitted:", formData);
    alert("Check the console for submitted data!"); // optional
  };

  return (
    <section className='bg-white '>
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Map Section */}
      <div className=" bg-white md:flex-1 w-full h-96 md:h-auto">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.098539917458!2d85.30838401507106!3d27.708408682787227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190d63b997eb%3A0xa3d1bb68a3f4c8b!2sNew%20Baneshwor%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1702678823881!5m2!1sen!2sus"
          className="  w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Form Section */}
      <div className=" border mt-40 bg-white md:flex-1 w-full p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Contact <span className='text-[#D95103]'>Us</span></h2>
        <p className="mb-6 text-gray-700">
          If you have any queries, send us a message. Our friendly team would love
          to hear from you
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="flex-1 p-3 border rounded"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="flex-1 p-3 border rounded"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <select
            name="service"
            className="p-3 border rounded"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">What can we do for you</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border rounded"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border rounded"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="p-3 border rounded"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-[#0C6967] text-white p-3   rounded-3xl hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}
export default MAPandContactus
