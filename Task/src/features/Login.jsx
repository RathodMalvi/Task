import React, { useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import '../App.css'
import { FaEye, FaGoogle, FaLock, FaUser } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }} = useForm()

    async function loginData() {
        let item = { email, password }
        try {
            let result = await fetch('https://api-dev.wogom.com/v1/retailer/login', {
                method: 'POST',
                headers: {'Content-type': 'application/json',
                    'x-random': 'xyz',
                    'x-userid': '7185',
                    'xyz': '754ad38082d761943b6c95670a38c6ca',
                    'x-deviceinfo': 'postmen',
                },
                
                body: JSON.stringify(item),

            })
            result = await result.json()
            localStorage.setItem("user-Data", JSON.stringify(result))
            navigate('/product')
        }
        catch(err) {
            console.log(err);
        }
    }


    let showHide = () => {
        let pwd = document.getElementById('pwd')
        if (pwd.type == 'password') {
            pwd.type = 'text'
        }
        else if (pwd.type == 'text') {
            pwd.type = 'password'
        }
    }
    return (
        <>
            <Container className='mb-2'>
                <h1>Welcome</h1>
                <Form onSubmit={handleSubmit(loginData)}>
                    <Form.Group className='mb-2'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
                            <Form.Control type='text' onChange={(e) => setEmail(e.target.value)} />
                        </InputGroup>
                    </Form.Group>
                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}

                    <Form.Group className='mb-2'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><FaLock /></InputGroup.Text>
                            <Form.Control type='password' {...register('password', { required: "Password is required", minLength: { value: 6, message: 'Min 6 char allow' }, maxLength: { value: 20, message: 'Max 20 char allow' } })} onChange={(e) => setPassword(e.target.value)} id='pwd' />
                            <Button onClick={() => showHide()} className='btn btn-dark' id='btn'><FaEye /></Button>
                        </InputGroup>
                    </Form.Group>
                    {errors.password && <span className='text-danger'>{errors.password.message}</span>}

                    <h6 className='text-danger mt-2' style={{ textAlign: 'end' }}>Forgot password ?</h6>

                    <div className="d-grid gap-3 mt-3">
                        <button type="submit" className="btn btn-danger">Login</button>
                    </div>
                    <div className="d-grid gap-3 mt-3">
                        <button type="button" className="btn btn-primary"><FaGoogle /> Login with Google</button>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default Login

