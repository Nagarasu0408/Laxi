import React, { useState } from 'react';

function Login() {
    const [activeTab, setActiveTab] = useState('login');
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [registerForm, setRegisterForm] = useState({ name: '', username: '', email: '', password: '', repeatPassword: '' });

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleLoginChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterForm({ ...registerForm, [e.target.id]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login form submission logic here
        console.log('Login form submitted', loginForm);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Handle register form submission logic here
        console.log('Register form submitted', registerForm);
    };

    return (
        <>
            <div className='Login1'>

                <div className='Login'>
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a
                                className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                                id="tab-login"
                                href="#pills-login"
                                role="tab"
                                aria-controls="pills-login"
                                aria-selected={activeTab === 'login'}
                                onClick={() => handleTabChange('login')}
                            >
                                Login
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                                id="tab-register"
                                href="#pills-register"
                                role="tab"
                                aria-controls="pills-register"
                                aria-selected={activeTab === 'register'}
                                onClick={() => handleTabChange('register')}
                            >
                                Register
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className={`tab-pane fade show ${activeTab === 'login' ? 'active' : ''}`} id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            <form onSubmit={handleLoginSubmit}>
                                <div className="text-center mb-3">
                                    <p>Sign in with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>
                                <p className="text-center">or:</p>
                                <div className="form-outline mb-4">
                                    <input type="email" id="email" className="form-control" value={loginForm.email} onChange={handleLoginChange} />
                                    <label className="form-label" htmlFor="email">Email or username</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="password" className="form-control" value={loginForm.password} onChange={handleLoginChange} />
                                    <label className="form-label" htmlFor="password">Password</label>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div className="form-check mb-3 mb-md-0">
                                            <input className="form-check-input" type="checkbox" id="loginCheck" defaultChecked />
                                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                                <div className="text-center">
                                    <p>Not a member? <a href="#!" onClick={() => handleTabChange('register')}>Register</a></p>
                                </div>
                            </form>
                        </div>
                        <div className={`tab-pane fade show ${activeTab === 'register' ? 'active' : ''}`} id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="text-center mb-3">
                                    <p>Sign up with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>
                                <p className="text-center">or:</p>
                                <div className="form-outline mb-4">
                                    <input type="text" id="name" className="form-control" value={registerForm.name} onChange={handleRegisterChange} />
                                    <label className="form-label" htmlFor="name">Name</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="text" id="username" className="form-control" value={registerForm.username} onChange={handleRegisterChange} />
                                    <label className="form-label" htmlFor="username">Username</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" id="email" className="form-control" value={registerForm.email} onChange={handleRegisterChange} />
                                    <label className="form-label" htmlFor="email">Email</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="password" className="form-control" value={registerForm.password} onChange={handleRegisterChange} />
                                    <label className="form-label" htmlFor="password">Password</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="repeatPassword" className="form-control" value={registerForm.repeatPassword} onChange={handleRegisterChange} />
                                    <label className="form-label" htmlFor="repeatPassword">Repeat password</label>
                                </div>
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" id="registerCheck" defaultChecked />
                                    <label className="form-check-label" htmlFor="registerCheck">
                                        I have read and agree to the terms
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
