import React, { useState, useEffect } from 'react';
import './AuthSystem.css';

const AuthApp = () => {
    const [view, setView] = useState('login'); // 'login', 'register', 'success'
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    // Form states
    const [regForm, setRegForm] = useState({ name: '', rollNo: '', email: '', password: '' });
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });

    const handleRegister = (e) => {
        e.preventDefault();
        if (!regForm.name || !regForm.rollNo || !regForm.email || !regForm.password) {
            setError('Please fill all fields');
            return;
        }

        // Store in localStorage
        localStorage.setItem('userAuthData', JSON.stringify(regForm));
        alert('Registration Successful! Please login.');
        setView('login');
        setError('');
        setRegForm({ name: '', rollNo: '', email: '', password: '' });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const storedData = localStorage.getItem('userAuthData');

        if (!storedData) {
            setError('No user found. Please register first.');
            return;
        }

        const user = JSON.parse(storedData);
        if (user.email === loginForm.email && user.password === loginForm.password) {
            setUserData(user);
            setView('success');
            setError('');
        } else {
            setError('Invalid Email or Password');
        }
    };

    const handleLogout = () => {
        setUserData(null);
        setView('login');
        setLoginForm({ email: '', password: '' });
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                {error && <div style={{ color: '#ef4444', textAlign: 'center', marginBottom: '15px', fontSize: '0.9rem' }}>{error}</div>}

                {view === 'register' && (
                    <div className="register-view">
                        <div className="auth-header">
                            <h2>Create Account</h2>
                            <p>Join us by creating your student profile</p>
                        </div>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={regForm.name}
                                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Roll Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter your roll number "
                                    value={regForm.rollNo}
                                    onChange={(e) => setRegForm({ ...regForm, rollNo: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={regForm.email}
                                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={regForm.password}
                                    onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className="auth-btn">Register</button>
                        </form>
                        <div className="auth-footer">
                            Already have an account? <span onClick={() => { setView('login'); setError(''); }}>Login</span>
                        </div>
                    </div>
                )}

                {view === 'login' && (
                    <div className="login-view">
                        <div className="auth-header">
                            <h2>Welcome Back</h2>
                            <p>Please enter your credentials to login</p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    value={loginForm.email}
                                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={loginForm.password}
                                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className="auth-btn">Sign In</button>
                        </form>
                        <div className="auth-footer">
                            Don't have an account? <span onClick={() => { setView('register'); setError(''); }}>Register</span>
                        </div>
                    </div>
                )}

                {view === 'success' && userData && (
                    <div className="success-content">
                        <div className="success-icon">✓</div>
                        <div className="auth-header">
                            <h2>Login Successful</h2>
                            <p>Welcome back to your dashboard</p>
                        </div>

                        <div className="user-info-card">
                            <div className="info-item">
                                <div className="info-label">Student Name</div>
                                <div className="info-value">{userData.name}</div>
                            </div>
                            <div className="info-item">
                                <div className="info-label">Roll Number</div>
                                <div className="info-value">{userData.rollNo}</div>
                            </div>
                            <div className="info-item">
                                <div className="info-label">Email Address</div>
                                <div className="info-value">{userData.email}</div>
                            </div>
                        </div>

                        <button onClick={handleLogout} className="auth-btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)' }}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthApp;
