import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       const { name, email, message } = formData;

       if (!name || !email || !message) {
           setError("All fields are required");
           console.log("All fields are required");
           return;
       }

       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(email)) {
           setError("Invalid email format");
           console.log("Invalid email format");
           return;
       }

         setFormData({
                name: "",
                email: "",
                message: ""
            });
            setError("");
            setSuccess("Message sent successfully!");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 fs-2 bordered-text">Contact Me</h2>
            <p className="text-center mb-4 fs-4">Fill out the form below to get in touch with me!</p>

            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <div className="form-group w-75">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group w-75">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group w-75">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-50 mt-3">Submit</button>
                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}
            </form>
        </div>
    );
};

export default Contact;