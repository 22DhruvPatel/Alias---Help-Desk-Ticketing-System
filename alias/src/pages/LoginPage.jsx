import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Authentication will be connected to Supabase here.
        console.log("Login submitted");
    };

    return (
        <>
            <style>{`


                .login-page {
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


                .login-container {
                    width: 100%;
                    max-width: 1050px;

                    min-height: 620px;

                    display: grid;
                    grid-template-columns: 1fr 1fr;

                    background: #ffffff;

                    border-radius: 20px;

                    overflow: hidden;

                    box-shadow:
                        0 25px 70px rgba(15, 23, 42, 0.12);

                    border: 1px solid #e2e8f0;
                }


           

                .login-info {
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

                .login-info::before {
                    content: "";

                    position: absolute;

                    width: 320px;
                    height: 320px;

                    border-radius: 50%;

                    background: rgba(37, 99, 235, 0.25);

                    top: -130px;
                    right: -130px;
                }

                .login-info::after {
                    content: "";

                    position: absolute;

                    width: 250px;
                    height: 250px;

                    border-radius: 50%;

                    background: rgba(20, 184, 166, 0.12);

                    bottom: -100px;
                    left: -100px;
                }


                .login-brand {
                    position: relative;
                    z-index: 2;

                    margin-bottom: 45px;
                }

                .login-brand h1 {
                    font-size: 42px;

                    margin: 0 0 8px;

                    letter-spacing: -1px;
                }

                .login-brand p {
                    margin: 0;

                    color: #bfdbfe;

                    font-size: 15px;
                }


                .login-info-content {
                    position: relative;
                    z-index: 2;
                }

                .login-info-content h2 {
                    font-size: 32px;

                    line-height: 1.2;

                    margin: 0 0 18px;
                }

                .login-info-content > p {
                    color: #cbd5e1;

                    line-height: 1.7;

                    font-size: 15px;

                    max-width: 400px;

                    margin-bottom: 35px;
                }


                /* =========================================
                   BENEFITS
                ========================================= */

                .login-benefits {
                    display: flex;
                    flex-direction: column;

                    gap: 18px;
                }

                .login-benefit {
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

                    background: rgba(255, 255, 255, 0.12);

                    font-size: 17px;
                }

                .login-benefit span {
                    color: #e2e8f0;

                    font-size: 14px;
                }


                /* =========================================
                   RIGHT SIDE
                ========================================= */

                .login-form-section {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    padding: 60px;
                }

                .login-form-header {
                    margin-bottom: 32px;
                }

                .login-form-header h2 {
                    margin: 0 0 10px;

                    font-size: 32px;

                    color: #172554;
                }

                .login-form-header p {
                    margin: 0;

                    color: #64748b;

                    font-size: 15px;
                }


                .login-form {
                    width: 100%;
                }

                .form-group {
                    margin-bottom: 21px;
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
                        0 0 0 3px rgba(37, 99, 235, 0.12);
                }

                .form-input::placeholder {
                    color: #94a3b8;
                }



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



                .login-options {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    margin: 5px 0 25px;
                }

                .remember-option {
                    display: flex;
                    align-items: center;

                    gap: 8px;

                    color: #64748b;

                    font-size: 13px;

                    cursor: pointer;
                }

                .remember-option input {
                    width: 15px;
                    height: 15px;

                    accent-color: #2563eb;

                    cursor: pointer;
                }

                .forgot-link {
                    color: #2563eb;

                    font-size: 13px;

                    font-weight: 600;
                }

                .forgot-link:hover {
                    color: #1d4ed8;

                    text-decoration: underline;
                }


                .login-button {
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
                        0 8px 18px rgba(37, 99, 235, 0.2);
                }

                .login-button:hover {
                    background: #1d4ed8;

                    transform: translateY(-1px);

                    box-shadow:
                        0 10px 22px rgba(37, 99, 235, 0.25);
                }

                .login-button:active {
                    transform: translateY(0);
                }



                .register-section {
                    text-align: center;

                    margin-top: 28px;

                    padding-top: 25px;

                    border-top: 1px solid #e2e8f0;

                    color: #64748b;

                    font-size: 14px;
                }

                .register-link {
                    color: #2563eb;

                    font-weight: 600;

                    margin-left: 5px;
                }

                .register-link:hover {
                    text-decoration: underline;
                }


                .back-home {
                    display: inline-block;

                    margin-top: 25px;

                    text-align: center;

                    color: #64748b;

                    font-size: 13px;

                    transition: color 0.2s ease;
                }

                .back-home:hover {
                    color: #2563eb;
                }



                @media (max-width: 800px) {

                    .login-container {
                        grid-template-columns: 1fr;

                        max-width: 550px;
                    }

                    .login-info {
                        padding: 45px;

                        min-height: 350px;
                    }

                    .login-info-content h2 {
                        font-size: 28px;
                    }

                    .login-benefits {
                        display: grid;

                        grid-template-columns: 1fr 1fr;
                    }

                    .login-form-section {
                        padding: 45px;
                    }

                }


                @media (max-width: 500px) {

                    .login-page {
                        padding: 20px 12px;
                    }

                    .login-info {
                        padding: 35px 25px;
                    }

                    .login-form-section {
                        padding: 35px 25px;
                    }

                    .login-brand h1 {
                        font-size: 36px;
                    }

                    .login-info-content h2 {
                        font-size: 25px;
                    }

                    .login-benefits {
                        grid-template-columns: 1fr;
                    }

                    .login-form-header h2 {
                        font-size: 28px;
                    }

                }

            `}</style>


            <div className="login-page">

                <div className="login-container">


                    {/* =================================
                        LEFT INFORMATION PANEL
                    ================================== */}

                    <section className="login-info">

                        <div className="login-brand">
                            <h1>Alias</h1>

                            <p>
                                Help Desk Ticketing System
                            </p>
                        </div>


                        <div className="login-info-content">

                            <h2>
                                Welcome back.
                            </h2>

                            <p>
                                Sign in to manage your support requests,
                                track tickets, and connect with your IT
                                support team.
                            </p>


                            <div className="login-benefits">

                                <div className="login-benefit">

                                    <div className="benefit-icon">
                                        ✓
                                    </div>

                                    <span>
                                        Track your support tickets
                                    </span>

                                </div>


                                <div className="login-benefit">

                                    <div className="benefit-icon">
                                        ✓
                                    </div>

                                    <span>
                                        Communicate with support agents
                                    </span>

                                </div>


                                <div className="login-benefit">

                                    <div className="benefit-icon">
                                        ✓
                                    </div>

                                    <span>
                                        Access helpful knowledge articles
                                    </span>

                                </div>

                            </div>

                        </div>

                    </section>


                

                    <section className="login-form-section">

                        <div className="login-form-header">

                            <h2>
                                Sign In
                            </h2>

                            <p>
                                Enter your account details to continue.
                            </p>

                        </div>


                        <form
                            className="login-form"
                            onSubmit={handleSubmit}
                        >

                            {/* EMAIL */}

                            <div className="form-group">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="you@example.com"
                                    required
                                    autoComplete="email"
                                />

                            </div>


                            {/* PASSWORD */}

                            <div className="form-group">

                                <label htmlFor="password">
                                    Password
                                </label>

                                <div className="input-wrapper">

                                    <input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        className="form-input password-input"
                                        placeholder="Enter your password"
                                        required
                                        autoComplete="current-password"
                                    />

                                    <button
                                        type="button"
                                        className="show-password"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword
                                            ? "Hide"
                                            : "Show"}
                                    </button>

                                </div>

                            </div>


                            {/* OPTIONS */}

                            <div className="login-options">

                                <label className="remember-option">

                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(
                                                e.target.checked
                                            )
                                        }
                                    />

                                    Remember me

                                </label>


                                <Link
                                    to="/forgot-password"
                                    className="forgot-link"
                                >
                                    Forgot password?
                                </Link>

                            </div>


                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="login-button"
                            >
                                Sign In
                            </button>

                        </form>


                        {/* REGISTER */}

                        <div className="register-section">

                            Don't have an account?

                            <Link
                                to="/register"
                                className="register-link"
                            >
                                Create Account
                            </Link>

                        </div>


                        {/* HOME */}

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

export default LoginPage;