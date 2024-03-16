import React, { useEffect } from 'react'
import CardList from './body/CardList';
import Header from './header/Header'
import Footer from './footer/Footer';
import Carrusel from './Carrusel/Carrusel';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

function InicioSesionIniciada() {
    const cerraSesion = () => {
        Swal.fire({
            title: "¿Está seguro que desea cerrar la sesión?",
            icon: "question",
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Cookie.remove('email', { path: "/" })
                    window.location.hash = '/login'
                }
            })
    }
    //Si no se está logueado y en la barra de direcciones digitan /sesion entonces redirige al login
    useEffect(() => {
        if (!Cookie.get('email')) {
            window.location.hash = '/login'
        }
    })
    return (
        <div>
            <div className='border border-primary flex w-3/4'>
                <h4>Bienvenido(a) {Cookie.get('email')}</h4>
                <button onClick={cerraSesion}>Cerrar sesión</button>
                <PersonSharpIcon />
            </div>
            <Header />
            <Carrusel />
            <CardList />
            <Footer />
        </div>
    )
}

export default InicioSesionIniciada