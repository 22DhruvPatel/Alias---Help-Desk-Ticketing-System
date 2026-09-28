import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseclient";

function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");
        setLoading(true);

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });

        setLoading(false);

        if (error) {
            setError(error.message);
            return;
        }

        setMessage(
            "If an account exists with this email, a password reset link has been sent."
        );
    };

    return (
        <div style={{ maxWidth: "500px", margin: "80px auto", padding: "20px" }}>
            <h1>Forgot Password</h1>

            <p>Enter your email address and we will send you a password reset link.</p>

            <form onSubmit={handleSubmit}>
                <label>Email Address</label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        margin: "8px 0 15px",
                    }}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Reset Link"}
                </button>
            </form>

            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>
            )}

            {message && (
                <p style={{ color: "green" }}>
                    {message}
                </p>
            )}

            <p>
                <Link to="/login">Back to Login</Link>
            </p>
        </div>
    );
}

export default ForgotPasswordPage;