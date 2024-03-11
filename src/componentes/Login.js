import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from './header/Header'
import Footer from './footer/Footer';

const Login = () => {
    return (
        <div>
            <Header/>
            <section className="vh-100 bg-primary">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong rounded" >
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Sign in</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="typeEmailX-2">Email</label>
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />

                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="typePasswordX-2">Password</label>
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />

                                    </div>

                                    {/*  <!-- Checkbox --> */}
                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label" for="form1Example3"> Remember password </label>
                                    </div>

                                    <div class="d-grid gap-2 col-15 mx-auto">
                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                    </div>

                                    <hr className="my-20" /> {/* Crea una línea horizontal */}

                                    <div class="d-grid gap-2 col-15 mx-auto">
                                        <button className="btn btn-lg btn-block btn-primary bg-danger"
                                            type="submit"><GoogleIcon />  Sign in with google</button>
                                        <button className="btn btn-lg btn-block btn-primary mb-2 bg-primary"
                                            type="submit"><FacebookIcon/> Sign in with facebook</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Login;
