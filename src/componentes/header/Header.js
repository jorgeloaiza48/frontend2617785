import React from 'react'
import './header.css'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotesIcon from '@mui/icons-material/Notes';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import LoginIcon from '@mui/icons-material/Login';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='contenedor'>
            <img src="logo.jpg" className="logo" alt="logo" />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <HomeIcon />
                            <a className="nav-link" href="#">Inicio<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <LibraryBooksIcon />
                            <a className="nav-link" href="#">Tutoriales</a>
                        </li>
                        <li className="nav-item">
                            <NotesIcon />
                            <a className="nav-link" href="#">
                                Referencia
                            </a>
                        </li>
                        <li className="nav-item">
                            <CleanHandsOutlinedIcon />
                            <a className="nav-link" href="#">
                                Recursos
                            </a>
                        </li>
                        <li className="nav-item">
                            <ConnectWithoutContactOutlinedIcon />
                            <a className="nav-link" href="#">
                                Contacto
                            </a>
                        </li>
                        <Link to='/registro'>
                            <li className="nav-item">
                                <HowToRegOutlinedIcon />
                                <a className="nav-link" href="#">
                                    Registrase
                                </a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <LoginIcon />
                            <a className="nav-link" href="#">
                                Iniciar sesión
                            </a>
                        </li>
                        <Link to='/usuarios-registrados'>
                        <li className="nav-item">
                            <GroupsIcon />
                            <a className="nav-link" href="#">
                                Ver usuarios
                            </a>
                        </li>
                        </Link>
                    </ul>
                </div>
            </nav>
            <form className="d-flex" role="search">
                <SearchTwoToneIcon fontSize='large' />
                <input className='form-control' type="search" placeholder="Search" />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Header