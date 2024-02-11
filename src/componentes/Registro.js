
import React, { useState } from 'react'
//import { saveAs } from 'file-saver';


export default function Registro() {



    const [values, setValues] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        password: ""

    })
    const handleChange = (e) => {

        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/registro-usuario', {
            method: 'POST',
            headers: { "Content-Type": "application/json", 'Accept': 'application/json' },           
            body: JSON.stringify(values)
        })
            .then(response => {
                if (response.status === 200) {
                    alert("Usuario creado con éxito")
                }
                else {
                    alert("No fue posible crear el usuario " + response.status)

                }
            })
            .catch((error) => {
                alert("No fue posible finalizar el proceso de registro por un error " + error)
            })



    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <section className="vh-100 bg-image" >

                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">

                            <div className="card" >
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Registro</h2>



                                    <div className="form-outline mb-4">

                                        <label className="form-label" htmlFor="form3Example1cg">Nombre</label>
                                        <input type="text" id="form3Example1cg" className="form-control" name='nombres' onChange={handleChange} />

                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example1cg">Apellido</label>
                                        <input type="text" id="form3Example2cg" className="form-control form-control-lg" name='apellidos' onChange={handleChange} />

                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='email' onChange={handleChange} />

                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' onChange={handleChange} />

                                    </div>

                                    {/*  <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                        <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />

                                    </div>
 */}
                                    {/*  <div className="form-check d-flex justify-content-center mb-5">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                        <label className="form-check-label" htmlFor="form2Example3g">
                                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                        </label>
                                    </div> */}

                                    <div className="d-flex justify-content-center">
                                        <button type='submit' className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                    </div>

                                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                        className="fw-bold text-body"><u>Login here</u></a></p>



                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            </form>

        </div>
    )
}
