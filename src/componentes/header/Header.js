import React from 'react'
import './header.css'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotesIcon from '@mui/icons-material/Notes';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


function Header() {
    return (
        <div className='contenedor'>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <img src="logo.jpg" className="logo" alt="logo" />
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <HomeIcon/>
                            <a className="nav-link" href="#">Inicio<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <LibraryBooksIcon/>
                            <a className="nav-link" href="#">Tutoriales</a>
                        </li>
                        <li className="nav-item">
                            <NotesIcon/>
                            <a className="nav-link" href="#">
                                Referencia
                            </a>
                        </li>
                        <li className="nav-item">
                            <CleanHandsOutlinedIcon/>
                            <a className="nav-link" href="#">
                                Recursos
                            </a>
                        </li>
                        <li className="nav-item">
                            <ConnectWithoutContactOutlinedIcon/>
                            <a className="nav-link" href="#">
                                Contacto
                            </a>
                        </li>
                        <li className="nav-item">
                            <HowToRegOutlinedIcon/>
                            <a className="nav-link" href="#">
                                Registrase
                            </a>
                        </li>
                        <li className="nav-item">
                            <LoginOutlinedIcon/>
                            <a className="nav-link" href="#">
                                Iniciar sesión
                            </a>
                        </li>
                    </ul>

                    <form className='form-search' >
                        <SearchTwoToneIcon fontSize='large'/>
                        <input className='form-control' type="search" placeholder="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>

                </div>
            </nav>
        </div>
    )
}

export default Header