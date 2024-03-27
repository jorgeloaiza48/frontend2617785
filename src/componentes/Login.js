import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import GroupIcon from '@mui/icons-material/Group';
import Header from './header/Header'
import Footer from './footer/Footer';
import Cookies from 'universal-cookie' //https://www.npmjs.com/package/universal-cookie
import Swal from 'sweetalert2';


import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {

    const cookies = new Cookies()
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    //const [userName, setUserName] = useState("")
    const [showPassword, setShowPassword] = useState(true)


    const [values, setValues] = useState({
        rol: "",
        email: "",
        password: "",
    })
    //Guarda en la variable newValues los valores ingresados en el formulario de Inicio de sesión
    const handleChange = (e) => {
        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }


    const handleClickPassword = (e) => {
        setErrorPassword(false)
    }

    const handleClickEmail = (e) => {
        setErrorEmail(false)
    }

    const handleShowPassword = (e) => {
        setShowPassword(!showPassword)
    }

    const iniciarSesion = (e) => {
        e.preventDefault()
        let select = document.getElementById("exampleFormControlSelect1");//capturamos el valor seleccionado en el select
        values.rol = select.value //Guardamos en el arreglo "values" el rol seleccionado por medio del select.       

        if (values.password.length === 0 && values.email.length === 0) {
            setErrorEmail(true)
            setErrorPassword(true)
            return
        }
        if (values.password.length === 0) {
            setErrorPassword(true)
            return
        }
        if (values.email.length === 0) {
            setErrorEmail(true)
            return
        }
        fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: { "Content-Type": "Application/json", "Acept": "application/json" },
            body: JSON.stringify(values)
        })
            .then(response => {
                if (response.status === 200 && values.rol === "Usuario") {
                    cookies.set('email', values.email, {
                        secure: true,
                        sameSite: 'None',
                        path: '/'
                    })
                    window.location.hash = '/sesion' //Vista para los usuarios logueados con el rol de "usuario"
                }
                else if (response.status === 200 && values.rol === "Administrador") {
                    cookies.set('email', values.email, {
                        secure: true,
                        sameSite: 'None',
                        path: '/'
                    })
                    window.location.hash = '/usuarios-registrados' //vista con los usuarios registrados
                }
                else {
                    console.log("sdfd", response.status)
                    Swal.fire({
                        title: "Las credenciales ingresadas no son correctas",
                        icon: "error"
                    })
                    window.location.hash = '/login'
                }
            })
            .catch(() => Swal.fire({
                title: "No se puede iniciar sesión por un problema en el servidor",
                icon: "error"
            }),
                window.location.hash = '/login'
            )
    }

    //Si ya se inició sesión y escriben en la barra de direcciones '/login' entonces lo redirige al componente InicioSesionIniciada.
    useEffect(() => {
        if (cookies.get('email')) {
            window.location.hash = '/sesion'
        }
    })

    return (
        <div>
            <Header />
            <form onSubmit={iniciarSesion} >
                <section className="vh-100 bg-primary">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong rounded" >
                                    <div className="card-body p-5 text-center ">

                                        <h3 className="mb-5">Sign in</h3>

                                        <div class="form-group mb-4">
                                            <div className='text-start'><label for="exampleFormControlSelect1">Rol</label>
                                            </div>
                                            <div class="input-group mb-3">
                                                <select class="form-control" id="exampleFormControlSelect1" name='rol'>
                                                    <option>Administrador</option>
                                                    <option>Usuario</option>
                                                </select>
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon2"><GroupIcon /></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <div className='text-start'>
                                                <label className="form-label" for="typeEmailX-2">Email</label>
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" name='email' onChange={handleChange} onClick={handleClickEmail} />
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon2"><AlternateEmailIcon /></span>
                                                </div>
                                            </div>
                                            <span className='text-start'>{errorEmail ? <p>Debe ingresar un email</p> : ""}</span>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <div className='text-start'>
                                                <label className="form-label" for="typeEmailX-2">Password</label>
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type={showPassword ? "password" : "text"} class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" name='password' onChange={handleChange} onClick={handleClickPassword} />
                                                <div class="input-group-append">
                                                    <span class="input-group-text" id="basic-addon2"><PasswordIcon onClick={handleShowPassword} /></span>
                                                </div>
                                            </div>
                                            <span className='text-start'>{errorPassword ? <p>Debe ingresar una contraseña</p> : ""}</span>
                                        </div>


                                        {/*  <!-- Checkbox --> */}
                                        {/* <div className="form-check d-flex justify-content-start mb-4">
                                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                            <label className="form-check-label" for="form1Example3"> Remember password </label>
                                        </div> */}

                                        <div class="d-grid gap-2 col-15 mx-auto">
                                            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                        </div>

                                        <hr className="my-20" /> {/* Crea una línea horizontal */}

                                        {/*<div class="d-grid gap-2 col-15 mx-auto">
                                            <button className="btn btn-lg btn-block btn-primary bg-danger"
                                                type="submit"><GoogleIcon />  Sign in with google</button>
                                            <button className="btn btn-lg btn-block btn-primary mb-2 bg-primary"
                                                type="submit"><FacebookIcon /> Sign in with facebook</button>
                                        </div>*/}

                                        <GoogleOAuthProvider clientId='301730232436-4j505s60f0sku73muklt178q00qeljjp.apps.googleusercontent.com'>
                                            <GoogleLogin
                                                onSuccess={credentialResponse => {
                                                    console.log(credentialResponse)
                                                    console.log("Esto es credentialResponse.credential sin decodificar ", credentialResponse.credential)
                                                    const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                                                    console.log("Esto es credentialResponse decodificado ", credentialResponseDecode)
                                                    console.log(credentialResponseDecode.email, credentialResponseDecode.name, credentialResponseDecode)
                                                    cookies.set('email', credentialResponseDecode.email, {
                                                        secure: true,
                                                        sameSite: 'None',
                                                        path: '/'
                                                    })
                                                    cookies.set('nombre', credentialResponseDecode.name, {
                                                        secure: true,
                                                        sameSite: 'None',
                                                        path: '/'
                                                    })
                                                    window.location.hash = '/sesion'

                                                }}
                                                onError={() => {
                                                    console.log('Login Failed');
                                                }}
                                            />
                                        </GoogleOAuthProvider>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <Footer />
        </div>
    );
}

export default Login;
