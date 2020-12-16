import React, { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.png'
import DynamicInput from '../../components/DynamicInput'
import backIcon from '../../assets/images/icons/back.svg'
import './styles.css'


const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [invalid, setInvalid] = useState<any>(null)

    const areInputsValid = () => {
        
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if (email.length === 0 ){
            setInvalid('Preencha um email.');
            return false 
        }
        if(!regex.test(email)){
            setInvalid('Preencha um email válido.');
            return false 
        }
        setInvalid(null)
        return true
    }


    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault()
        if(!areInputsValid()){
            return
        }
       // Axios
       // utilize o email para fazer a requisição
        // se o email não existir, exiba um erro na tela.
       // depois de finalizar a requisição, envie o usuário para a tela inicial  OU TELA DE LOGIN
     }
    const handleChange = (e:any)=>{
        if(invalid){areInputsValid()}
        setEmail(e.target.value)
    }


    return (
        <div id='forgot-password-page'>
            <div className='forgot-password-form-wrapper'>

                <Link to='/' className='back-button'>
                    <img src={backIcon} alt="Go back" />
                </Link>

                <form className='forgot-password-form' onSubmit={handleFormSubmit}>
                    <div className='main-forgot-password'>
                        <h2>Esqueceu sua senha?</h2>
                        <p>Não esquenta, vamos dar um jeito nisso.</p>
                    </div>

                    <DynamicInput
                        type='text'
                        label='E-mail'
                        value={email}
                        onChange={handleChange}
                        onBlur={()=>areInputsValid()}
                    />

                    {invalid && (
                        <div className='invalid-information'>
                            <p>{invalid}</p>
                        </div>
                    )}

                    <button type='submit' className='forgot-password-button'>Enviar</button>
                </form>
            </div>


            <div className='forgot-password-page-logo'>
                <div>
                    <img src={logoImg} alt='' />
                    <p>Sua plataforma de encontrar professores de música online.</p>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword