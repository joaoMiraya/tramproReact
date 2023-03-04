
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

import { FcGoogle } from 'react-icons/fc'
import imageRegister from '../../../assets/images/default-image.jpg'
import { AiOutlineClose } from 'react-icons/ai';

import { useModal } from '../../../assets/hooks/useModal';
import { validatePassword, formateDate, validateEmail, formatarCPF, formatPhoneNumber, validateName } from '../../../assets/utils/regex';

/*  GOOGLE REGISTER */
import { initializeGoogleSignIn, renderGoogleSignInButton, displayGoogleSignInDialog } from '../../../assets/utils/googleSignIn';


function RegisterForm() {


    /*  REGISTER GOOGLE */
    useEffect(() => {
        initializeGoogleSignIn();
        renderGoogleSignInButton();
        displayGoogleSignInDialog();
    }, []);


    /*  ------------VALIDAÇÃO DO FORMULARIO--------------- */

    const [cpf, setCPF] = useState('');
    const [rua, setRua] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');


    useEffect(() => {
        setCPF(formatarCPF(cpf));
    }, [cpf]);

    function handleChangeCPF(event) {
        setCPF(event.target.value);
    }

    const [cel, setCel] = useState('');

    function handleChangeCel(event) {
        const formattedNumber = formatPhoneNumber(event.target.value);
        setCel(formattedNumber);
    }

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(false);

    const [lastName, setLastName] = useState("");
    const [lastNameErr, setLastNameErr] = useState(false);

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [diffEmail, setDiffEmail] = useState(false);


    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);
    const [diffPassword, setDiffPassword] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);


    function submitForm(e) {
        e.preventDefault();
    }


    const validate = () => {
        if (!validateEmail.test(email)) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }
        if (confirmEmail === email) {
            setDiffEmail(false);
        } else {
            setDiffEmail(true);
        }
        if (!validatePassword.test(password)) {
            setPasswordErr(true);
        } else {
            setPasswordErr(false);
        }
        if (password.length < 6) {
            setEmptyPassword(true)
        } else {
            setEmptyPassword(false)
        }
        if (confirmPassword === password) {
            setDiffPassword(false);
        } else {
            setDiffPassword(true);
        }
        if (!validateName.test(name)) {
            setNameErr(true);
        } else {
            setNameErr(false);
        }
               if (!validateName.test(lastName)) {
            setLastNameErr(true);
        } else {
            setLastNameErr(false);
        }

    }



    /*  CIDADES E ESTADOS */

    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedUf, setSelectedUf] = useState("0");
    const [selectedCity, setSelectedCity] = useState("0");

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .then(response => {
                setUfs(response.data)
            });
    }, []);

    useEffect(() => {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                setCities(response.data)
            });
    }, [selectedUf]);

    function handlerSelectUf(event) {
        const uf = event.target.value;
        setSelectedUf(uf);
    }

    function handlerSelectCity(event) {
        const city = event.target.value;
        setSelectedCity(city);
    }

    const { closeRegisterModal } = useModal();


    const data_cadastro = Date();
    const formatingDate = data_cadastro.replace(formateDate, "$3/$2/$4");
    const formattedDate = formatingDate.slice(0, 11);

    const usuarioCadastro = {
        nome: name,
        sobrenome: lastName,
        cpf: cpf,
        telefone: cel,
        cidade: selectedCity,
        estado: selectedUf,
        rua: rua,
        numero_casa: numeroCasa,
        email: email,
        senha: password,
        data_cadastro: formattedDate
    };
/* 
       registerUser = (usuarioCadastro) => {
           fetch("http://localhost:3005/users/", {
               method: 'POST',
               headers: { 'Content-Type:': 'application/json' },
               body: JSON.stringify(usuarioCadastro)
           })
               .then(response => {
                   response.status(201).json();
               })
               .catch( err => {
                   alert("Não foi possivel completar o cadastro!")
                   console.log(err)
               })
       } */


    console.log(usuarioCadastro)
    return (
        <React.Fragment>
            <div className='containerModalLogin'>

                <div className='registerFormContainer'>
                    <AiOutlineClose className='closeBtnRegisterModal' onClick={closeRegisterModal} />
                    <div className='imageBoxRegister'>
                        <img src={imageRegister} alt="img" width={300} height={300} />
                    </div>

                    <form action="#" method='POST'>
                        <div className='registerBox'>
                            <label htmlFor="registerEmail">Email: </label> <br />
                            <input
                                type="text"
                                name="registerEmail"
                                id="registerEmail" placeholder="aaa@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label htmlFor="registerConfirmEmail">Confirme seu Email: </label> <br />
                            <input
                                type="text"
                                name="registerConfirmEmail"
                                id="registerConfirmEmail"
                                placeholder="aaa@email.com"
                                value={confirmEmail}
                                onChange={(e) => setConfirmEmail(e.target.value)}
                                required
                            />

                        </div>

                        <div className='registerBox'>
                            <label htmlFor="registerSenha">Senha: </label> <br />
                            <input
                                type="password"
                                name="registerSenha"
                                id="registerSenha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <label htmlFor="registerConfirmESenha">Confirme sua senha: </label> <br />
                            <input
                                type="password"
                                name="registerConfirmSenha"
                                id="registerConfirmSenha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className='registerBox'>
                            <label htmlFor="registerNome">Nome: </label> <br />
                            <input
                                type="text"
                                name="registerNome"
                                id="registerNome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label htmlFor="registerSobrenome">Sobrenome: </label> <br />
                            <input
                                type="text"
                                name="registerSobrenome"
                                id="registerSobrenome"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>

                        <div className='registerBox'>
                            <label htmlFor="cpf">CPF: </label> <br />
                            <input
                                type="text"
                                name="cpf"
                                id="cpf"
                                placeholder="XXX.XXX.XXX-XX"
                                maxLength={11}
                                value={cpf}
                                onChange={handleChangeCPF}
                                required
                            />

                            <label htmlFor="registerTelefone">Telefone: </label> <br />
                            <input
                                type="text"
                                name="registerTelefone"
                                id="registerTelefone"
                                maxLength={11}
                                placeholder="(XX) XXXXX-XXXX"
                                value={cel}
                                onChange={handleChangeCel}
                                required
                            />
                        </div>

                        <div className='registerBox'>

                            <select name="registerUf" id="registerUf" onChange={handlerSelectUf}>
                                <option value="0">Selecione o Estado</option>
                                {ufs.map((uf) => (
                                    <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                                ))}
                            </select>

                            <select name="registerCidade"
                                value={selectedCity}
                                id="registerCidade"
                                onChange={handlerSelectCity}
                                required
                            >
                                <option value="0">Selecione a Cidade</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.nome}>{city.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className='registerBox'>
                            <label for="registerRua">Rua: </label> <br />
                            <input
                                type="text"
                                name="registerRua"
                                id="registerRua"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                                required

                            />

                            <label for="registerNumero">Número da casa: </label> <br />
                            <input
                                type="text"
                                name="registerNumero"
                                id="registerNumero"
                                value={numeroCasa}
                                onChange={(e) => setNumeroCasa(e.target.value)}
                                required

                            />
                        </div>

                        <div className='googleRegisterBox'>
                            <div id="buttonDiv"></div>
                        </div>

                        <div className='buttonRegisterBox'>
                            <button type='button' onClick={validate} >CADASTRAR</button>
                        </div>

                        <div className='errorBox'>
                            {passwordErr && <p>A senha precisa ter A-a-@-1 !</p>}
                            {diffPassword && <p>As senhas não são iguais!</p>}
                            {emptyPassword && <p>Sua senha precisa de no minímo 6 digitos!</p>}
                            {emailErr && <p>Por favor digite um email valído!</p>}
                            {diffEmail && <p>Os email estão diferentes!</p>}
                            {nameErr && <p>Digite um nome válido!</p>}
                            {lastNameErr && <p>Digite um sobrenome válido!</p>}

                        </div>


                    </form>


                </div>
            </div>
        </React.Fragment>
    )
}



export default RegisterForm;