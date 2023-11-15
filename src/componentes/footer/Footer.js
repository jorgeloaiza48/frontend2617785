import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './footer.css'

function Footer() {
    return (


        <footer >

            <section className='section1'>

                <div className='section1div1'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="" className="me-4 text-reset">
                        <FacebookOutlinedIcon></FacebookOutlinedIcon>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <TwitterIcon></TwitterIcon>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <GoogleIcon></GoogleIcon>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <InstagramIcon></InstagramIcon>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <LinkedInIcon></LinkedInIcon>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <GitHubIcon></GitHubIcon>
                    </a>
                </div>

            </section>



            <section className='section2' >
                <div >

                    <div className='section2Div2'>

                        <div className='section2Div3' >

                            <h6 ><i className="fas fa-gem me-3"></i>Company name</h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>



                        <div >

                            <h6 >
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>

                        <div >

                            <h6 >
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div >

                            <h6 >Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>

                    </div>

                </div>
            </section>



            <div className='div3' >
                © 2021 Copyright:
                <a href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>


    )
}

export default Footer