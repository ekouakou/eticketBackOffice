import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LogoHeader from '../components/LogoHeader';
import { doConnexion } from '../../services/apiService';

function Login() {
    const { theme } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append('mode', 'doConnexion');
            params.append('STR_UTILOGIN', email);
            params.append('STR_UTIPASSWORD', password);

            const response = await doConnexion(params);
            const userData = response.data;

            if (userData.code_statut === "1") {
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/mon-profile'); // Rediriger vers le tableau de bord
            } else {
                setError(userData.desc_statut);
            }
        } catch (error) {
            setError('Erreur de connexion. Veuillez réessayer.');
        }
    };

    const isActiveFunc = (match, location) => {
        return match !== null;
    };

    return (
        <div id='login' className={`d-lg-flex half ${theme}`}>
            <div className="bg order-1 order-md-2 pt-5" style={{ backgroundImage: 'url(assets/images/bg-login.svg)' }}>
                <div className="row login-logo align-items-center justify-content-center mt-5 mb-3">
                    <NavLink exact to="/" isActive={isActiveFunc}>
                        <LogoHeader theme={theme} />
                    </NavLink>
                    
                </div>
                <div className='align-items-center justify-content-center'>
                    <h3 className='text-center'>Text ici </h3>
                    <p className="mb-4 text-center mt-2">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                </div>
            </div>
            <div className="contents order-2 order-md-1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">

                        <div className='d-flex mb-4'>
                            <img src="assets/images/user.svg" className='mx-auto' width="70px" alt="light logo" />
                        </div>
                        <div className="section-header-3">
                            <p className="title text-dark">Bonjour, Bienvenu</p>
                            <p className="text-dark">Merci de vous connexion a votre espace.</p>
                        </div>

                            {/* <h3>Login to <strong>Colorlib</strong></h3> */}
                            {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
                            <form className="account-form row" onSubmit={handleLogin}>
                                <div className="form-group first col-lg-12">
                                    <label className='text-dark' htmlFor="email ">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="your-email@gmail.com"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group last mb-3 col-lg-12">
                                    <label className='text-dark' htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Your Password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-flex mb-5 align-items-center col-lg-12">
                                    <label className="control control--checkbox mb-0">
                                        <span className="caption">Remember me</span>
                                        <input type="checkbox" defaultChecked="checked" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                                </div>
                                <div className="form-group text-center d-block align-item-center mx-auto col-lg-12">
                                    <input type="submit" value="Log In" className="btn btn-block " />
                                </div>
                                {error && <div className="error-message">{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
