import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseclient";

function ResetPasswordPage() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setMessage("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        const { error } = await supabase.auth.updateUser({
            password: password,
        });

        if (error) {
            setError(error.message);
            return;
        }

        setMessage("Password updated successfully.");

        setTimeout(() => {
            navigate("/login");
        }, 1500);
    };

    return (
        <div style={{ maxWidth: "500px", margin: "80px auto", padding: "20px" }}>
            <h1>Reset Password</h1>

            <form onSubmit={handleSubmit}>
                <label>New Password</label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        margin: "8px 0 15px",
                    }}
                />

                <label>Confirm Password</label>

                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        margin: "8px 0 15px",
                    }}
                />

                <button type="submit">
                    Update Password
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {message && <p style={{ color: "green" }}>{message}</p>}
        </div>
    );
}

export default ResetPasswordPage;