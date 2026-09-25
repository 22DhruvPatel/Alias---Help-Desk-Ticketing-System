import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseclient";

function RegisterPage() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    // Update form state
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setError("");
        setSuccess("");
    };


    // Submit registration
    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");


        // Match passwords
        if (formData.password !== formData.confirmPassword) {

            setError("Passwords do not match.");

            return;
        }


        // Check length
        if (formData.password.length < 8) {

            setError(
                "Password must contain at least 8 characters."
            );

            return;
        }


        setLoading(true);


        // Sign up with Supabase
        const { data, error } = await supabase.auth.signUp({

            email: formData.email,

            password: formData.password,

            options: {

                data: {
                    full_name: formData.fullName
                }

            }

        });


        // Handle auth error
        if (error) {

            setError(error.message);

            setLoading(false);

            return;
        }


        // Handle success
        setLoading(false);


        /*
         * If email confirmation is enabled in Supabase,
         * a user will be created but there will be no
         * active session yet.
        */
        if (data.user && !data.session) {

            if (data.user.identities?.length === 0) {
                setError(
                    "An account with this email already exists. Please sign in instead."
                );

                return;
            }

            setSuccess(
                "Account created successfully. Please check your email to verify your account."
            );

            return;
        }


        /*
         * If email confirmation is disabled,
         * the user will receive a session immediately.
         */

        setSuccess(
            "Account created successfully. Redirecting to Sign In..."
        );


        setTimeout(() => {

            navigate("/login");

        }, 1500);

    };


    return (
        <>
            <style>{`

                /* =========================================
                   ALIAS REGISTER PAGE
                ========================================= */

                .register-page {
                    min-height: 100vh;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 40px 20px;

                    background:
                        linear-gradient(
                            135deg,
                            #eff6ff 0%,
                            #ffffff 50%,
                            #f0fdfa 100%
                        );

                    font-family:
                        Arial,
                        Helvetica,
                        sans-serif;

                    color: #172554;
                }


                /* =========================================
                   REGISTER CONTAINER
                ========================================= */

                .register-container {
                    width: 100%;
                    max-width: 1050px;

                    min-height: 650px;

                    display: grid;
                    grid-template-columns: 1fr 1fr;

                    background: #ffffff;

                    border-radius: 20px;

                    overflow: hidden;

                    box-shadow:
                        0 25px 70px rgba(15, 23, 42, 0.12);

                    border: 1px solid #e2e8f0;
                }


                /* =========================================
                   LEFT SIDE
                ========================================= */

                .register-info {
                    position: relative;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    padding: 60px;

                    background:
                        linear-gradient(
                            145deg,
                            #172554,
                            #1e3a8a
                        );

                    color: #ffffff;

                    overflow: hidden;
                }


                .register-info::before {
                    content: "";

                    position: absolute;

                    width: 320px;
                    height: 320px;

                    border-radius: 50%;

                    background:
                        rgba(37, 99, 235, 0.25);

                    top: -130px;
                    right: -130px;
                }


                .register-info::after {
                    content: "";

                    position: absolute;

                    width: 250px;
                    height: 250px;

                    border-radius: 50%;

                    background:
                        rgba(20, 184, 166, 0.12);

                    bottom: -100px;
                    left: -100px;
                }


                /* =========================================
                   BRAND
                ========================================= */

                .register-brand {
                    position: relative;

                    z-index: 2;

                    margin-bottom: 45px;
                }


                .register-brand h1 {
                    font-size: 42px;

                    margin: 0 0 8px;

                    letter-spacing: -1px;
                }


                .register-brand p {
                    margin: 0;

                    color: #bfdbfe;

                    font-size: 15px;
                }


                /* =========================================
                   LEFT CONTENT
                ========================================= */

                .register-info-content {
                    position: relative;

                    z-index: 2;
                }


                .register-info-content h2 {
                    font-size: 32px;

                    line-height: 1.2;

                    margin: 0 0 18px;
                }


                .register-info-content > p {
                    color: #cbd5e1;

                    line-height: 1.7;

                    font-size: 15px;

                    max-width: 400px;

                    margin-bottom: 35px;
                }


                /* =========================================
                   BENEFITS
                ========================================= */

                .register-benefits {
                    display: flex;

                    flex-direction: column;

                    gap: 18px;
                }


                .register-benefit {
                    display: flex;

                    align-items: center;

                    gap: 14px;
                }


                .benefit-icon {
                    width: 40px;
                    height: 40px;

                    display: flex;

                    align-items: center;
                    justify-content: center;

                    flex-shrink: 0;

                    border-radius: 10px;

                    background:
                        rgba(255, 255, 255, 0.12);

                    font-size: 17px;
                }


                .register-benefit span {
                    color: #e2e8f0;

                    font-size: 14px;
                }


                /* =========================================
                   RIGHT SIDE
                ========================================= */

                .register-form-section {
                    display: flex;

                    flex-direction: column;

                    justify-content: center;

                    padding: 60px;
                }


                .register-form-header {
                    margin-bottom: 30px;
                }


                .register-form-header h2 {
                    margin: 0 0 10px;

                    font-size: 32px;

                    color: #172554;
                }


                .register-form-header p {
                    margin: 0;

                    color: #64748b;

                    font-size: 15px;

                    line-height: 1.5;
                }


                /* =========================================
                   FORM MESSAGES
                ========================================= */

                .form-message {
                    padding: 12px 14px;

                    border-radius: 8px;

                    margin-bottom: 20px;

                    font-size: 13px;

                    line-height: 1.5;
                }


                .error-message {
                    background: #fef2f2;

                    color: #b91c1c;

                    border: 1px solid #fecaca;
                }


                .success-message {
                    background: #f0fdf4;

                    color: #15803d;

                    border: 1px solid #bbf7d0;
                }


                /* =========================================
                   FORM
                ========================================= */

                .register-form {
                    width: 100%;
                }


                .form-group {
                    margin-bottom: 18px;
                }


                .form-group label {
                    display: block;

                    margin-bottom: 8px;

                    color: #334155;

                    font-size: 14px;

                    font-weight: 600;
                }


                .input-wrapper {
                    position: relative;
                }


                .form-input {
                    width: 100%;

                    height: 48px;

                    padding: 0 15px;

                    border: 1px solid #cbd5e1;

                    border-radius: 8px;

                    background: #ffffff;

                    color: #172554;

                    font-size: 14px;

                    outline: none;

                    transition:
                        border-color 0.2s ease,
                        box-shadow 0.2s ease;

                    font-family: inherit;
                }


                .form-input:focus {
                    border-color: #2563eb;

                    box-shadow:
                        0 0 0 3px
                        rgba(37, 99, 235, 0.12);
                }


                .form-input::placeholder {
                    color: #94a3b8;
                }


                /* =========================================
                   PASSWORD
                ========================================= */

                .password-input {
                    padding-right: 80px;
                }


                .show-password {
                    position: absolute;

                    right: 13px;

                    top: 50%;

                    transform: translateY(-50%);

                    border: none;

                    background: transparent;

                    color: #2563eb;

                    font-size: 12px;

                    font-weight: 600;

                    cursor: pointer;

                    padding: 5px;
                }


                .show-password:hover {
                    color: #1d4ed8;
                }


                /* =========================================
                   PASSWORD HINT
                ========================================= */

                .password-hint {
                    margin-top: 7px;

                    color: #94a3b8;

                    font-size: 11px;

                    line-height: 1.5;
                }


                /* =========================================
                   TERMS
                ========================================= */

                .terms-section {
                    display: flex;

                    align-items: flex-start;

                    gap: 9px;

                    margin: 7px 0 24px;

                    color: #64748b;

                    font-size: 12px;

                    line-height: 1.5;

                    cursor: pointer;
                }


                .terms-section input {
                    width: 15px;
                    height: 15px;

                    margin-top: 2px;

                    flex-shrink: 0;

                    accent-color: #2563eb;

                    cursor: pointer;
                }


                .terms-section a {
                    color: #2563eb;

                    font-weight: 600;
                }


                .terms-section a:hover {
                    text-decoration: underline;
                }


                /* =========================================
                   REGISTER BUTTON
                ========================================= */

                .register-button {
                    width: 100%;

                    height: 50px;

                    border: none;

                    border-radius: 8px;

                    background: #2563eb;

                    color: #ffffff;

                    font-family: inherit;

                    font-size: 15px;

                    font-weight: 600;

                    cursor: pointer;

                    transition:
                        background 0.2s ease,
                        transform 0.2s ease,
                        box-shadow 0.2s ease;

                    box-shadow:
                        0 8px 18px
                        rgba(37, 99, 235, 0.2);
                }


                .register-button:hover {
                    background: #1d4ed8;

                    transform: translateY(-1px);

                    box-shadow:
                        0 10px 22px
                        rgba(37, 99, 235, 0.25);
                }


                .register-button:active {
                    transform: translateY(0);
                }


                .register-button:disabled {
                    background: #93c5fd;

                    cursor: not-allowed;

                    transform: none;

                    box-shadow: none;
                }


                /* =========================================
                   LOGIN LINK
                ========================================= */

                .login-section {
                    text-align: center;

                    margin-top: 25px;

                    padding-top: 23px;

                    border-top: 1px solid #e2e8f0;

                    color: #64748b;

                    font-size: 14px;
                }


                .login-link {
                    color: #2563eb;

                    font-weight: 600;

                    margin-left: 5px;
                }


                .login-link:hover {
                    text-decoration: underline;
                }


                /* =========================================
                   BACK HOME
                ========================================= */

                .back-home {
                    display: inline-block;

                    margin-top: 22px;

                    text-align: center;

                    color: #64748b;

                    font-size: 13px;

                    transition: color 0.2s ease;
                }


                .back-home:hover {
                    color: #2563eb;
                }


                /* =========================================
                   RESPONSIVE
                ========================================= */

                @media (max-width: 800px) {

                    .register-container {
                        grid-template-columns: 1fr;

                        max-width: 550px;
                    }


                    .register-info {
                        padding: 45px;

                        min-height: 360px;
                    }


                    .register-info-content h2 {
                        font-size: 28px;
                    }


                    .register-form-section {
                        padding: 45px;
                    }

                }


                @media (max-width: 500px) {

                    .register-page {
                        padding: 20px 12px;
                    }


                    .register-info {
                        padding: 35px 25px;
                    }


                    .register-form-section {
                        padding: 35px 25px;
                    }


                    .register-brand h1 {
                        font-size: 36px;
                    }


                    .register-info-content h2 {
                        font-size: 25px;
                    }


                    .register-form-header h2 {
                        font-size: 28px;
                    }

                }

            `}</style>


            <div className="register-page">

                <div className="register-container">


                    {/* Account info */}
                    <section className="register-info">

                        <div className="register-brand">

                            <h1>
                                Alias
                            </h1>

                            <p>
                                Help Desk Ticketing System
                            </p>

                        </div>


                        <div className="register-info-content">

                            <h2>
                                Get started with Alias.
                            </h2>

                            <p>
                                Create your account and get access to
                                a centralized platform for managing and
                                tracking your IT support requests.
                            </p>


                            <div className="register-benefits">

                                <div className="register-benefit">

                                    <div className="benefit-icon">
                                        ✓
                                    </div>

                                    <span>
                                        Submit and track support tickets
                                    </span>

                                </div>


                                <div className="register-benefit">

                                    <div className="benefit-icon">
                                        ✓
                                    </div>

                                    <span>
                                        Stay updated on ticket progress
                                    </span>

                                </div>


                                <div className="register-benefit">

                                    <div className="benefit-icon">
                                        ✓
                                    </div>

                                    <span>
                                        Access IT support resources
                                    </span>

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* Registration form */}
                    <section className="register-form-section">

                        <div className="register-form-header">

                            <h2>
                                Create Account
                            </h2>

                            <p>
                                Enter your information to create
                                your Alias account.
                            </p>

                        </div>


                        {/* Error message */}
                        {error && (
                            <div className="form-message error-message">
                                {error}
                            </div>
                        )}


                        {/* Success message */}
                        {success && (
                            <div className="form-message success-message">
                                {success}
                            </div>
                        )}


                        <form
                            className="register-form"
                            onSubmit={handleSubmit}
                        >


                            {/* Full name */}
                            <div className="form-group">

                                <label htmlFor="fullName">
                                    Full Name
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                />

                            </div>


                            {/* Email field */}
                            <div className="form-group">

                                <label htmlFor="register-email">
                                    Email Address
                                </label>

                                <input
                                    id="register-email"
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                />

                            </div>


                            {/* Password field */}
                            <div className="form-group">

                                <label htmlFor="register-password">
                                    Password
                                </label>

                                <div className="input-wrapper">

                                    <input
                                        id="register-password"
                                        name="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        className="form-input password-input"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        minLength={8}
                                        autoComplete="new-password"
                                    />


                                    <button
                                        type="button"
                                        className="show-password"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                    >
                                        {showPassword
                                            ? "Hide"
                                            : "Show"}
                                    </button>

                                </div>


                                <p className="password-hint">
                                    Password must contain at least
                                    8 characters.
                                </p>

                            </div>


                            {/* Confirm password */}
                            <div className="form-group">

                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>

                                <div className="input-wrapper">

                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        className="form-input password-input"
                                        placeholder="Confirm your password"
                                        value={
                                            formData.confirmPassword
                                        }
                                        onChange={handleChange}
                                        required
                                        minLength={8}
                                        autoComplete="new-password"
                                    />


                                    <button
                                        type="button"
                                        className="show-password"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    >
                                        {showConfirmPassword
                                            ? "Hide"
                                            : "Show"}
                                    </button>

                                </div>

                            </div>


                            {/* Terms check */}
                            <label className="terms-section">

                                <input
                                    type="checkbox"
                                    required
                                />

                                <span>
                                    I agree to the Alias terms of
                                    service and privacy policy.
                                </span>

                            </label>


                            {/* Register button */}
                            <button
                                type="submit"
                                className="register-button"
                                disabled={loading}
                            >

                                {loading
                                    ? "Creating Account..."
                                    : "Create Account"}

                            </button>

                        </form>


                        {/* Login link */}
                        <div className="login-section">

                            Already have an account?

                            <Link
                                to="/login"
                                className="login-link"
                            >
                                Sign In
                            </Link>

                        </div>


                        {/* Home link */}
                        <Link
                            to="/"
                            className="back-home"
                        >
                            ← Back to Alias
                        </Link>

                    </section>

                </div>

            </div>
        </>
    );
}

export default RegisterPage;