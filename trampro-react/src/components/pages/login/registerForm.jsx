
import React from 'react';
import { useEffect, useState, useRef } from "react";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

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


    function handleChangeCel(event) {
        const formattedNumber = formatPhoneNumber(event.target.value);
        setCel(formattedNumber);
    }

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const nameRegisterRef = useRef();

    const [lastName, setLastName] = useState("");
    const [lastNameErr, setLastNameErr] = useState(false);
    const lastNameRegisterRef = useRef();

    const [email, setEmail] = useState("");
    const emailRegisterRef = useRef();

    const [confirmEmail, setConfirmEmail] = useState("");
    const confirmEmailRef = useRef();

    const [emailErr, setEmailErr] = useState(false);
    const [diffEmail, setDiffEmail] = useState(false);

    const [password, setPassword] = useState("");
    const passwordRef = useRef();

    const [confirmPassword, setConfirmPassword] = useState("");
    const confirmPasswordRef = useRef();

    const [passwordErr, setPasswordErr] = useState(false);
    const [diffPassword, setDiffPassword] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);

    const [cpf, setCPF] = useState('');
    const cpfRef = useRef();
    const [cpfErr, setCPFErr] = useState(false);

    const [rua, setRua] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');

    const [cel, setCel] = useState('');
    const celRegisterRef = useRef();
    const [celErr, setCelErr] = useState(false);

    useEffect(() => {
        setCPF(formatarCPF(cpf));
    }, [cpf]);

    function handleChangeCPF(event) {
        setCPF(event.target.value);
    }

    const emailValidate = () => {
        if (!validateEmail.test(email)) {
            emailRegisterRef.current.classList.add("invalidInput")
            setEmailErr(true);
        } else {
            emailRegisterRef.current.classList.add("validInput")
            setEmailErr(false);
        }
        if (confirmEmail === email && validateEmail.test(confirmEmail)) {
            confirmEmailRef.current.classList.add("validInput")
            setDiffEmail(false);
        } else {
            confirmEmailRef.current.classList.add("invalidInput")
            setDiffEmail(true);
        }
    }
    const passwordValidate = () => {
        if (!validatePassword.test(password)) {
            passwordRef.current.classList.add("invalidInput")
            setPasswordErr(true);
        } else {
            passwordRef.current.classList.add("validInput")
            setPasswordErr(false);
        }
        if (password.length > 6 && validatePassword.test(password)) {
            passwordRef.current.classList.add("validInput")
            setEmptyPassword(false)
        } else {
            passwordRef.current.classList.add("invalidInput")
            setEmptyPassword(true)
        }
        if (confirmPassword === password && validatePassword.test(confirmPassword)) {
            confirmPasswordRef.current.classList.add("validInput")
            setDiffPassword(false);
        } else {
            setDiffPassword(true);
            confirmPasswordRef.current.classList.add("invalidInput")

        }
    }
    const validationName = () => {
        if (!validateName.test(name)) {
            nameRegisterRef.current.classList.add("invalidInput")
            setNameErr(true);
        } else {
            nameRegisterRef.current.classList.add("validInput")
            setNameErr(false);
        }
        if (!validateName.test(lastName)) {
            lastNameRegisterRef.current.classList.add("invalidInput")
            setLastNameErr(true);
        } else {
            lastNameRegisterRef.current.classList.add("validInput")
            setLastNameErr(false);
        }
    }
    const validateCel = () => {
        if (cel.length < 13) {
            setCelErr(true)
            celRegisterRef.current.classList.add("invalidInput")
        } else {
            celRegisterRef.current.classList.add("validInput")
            setCelErr(false)
        }
    }
    const validateCPF = () => {
        if (cpf.length < 13) {
            cpfRef.current.classList.add("invalidInput")
            setCPFErr(true)
        } else {
            cpfRef.current.classList.add("validInput")
            setCPFErr(false)
        }
    }

    /*  ------------FIM DA VALIDAÇÃO DO FORMULARIO--------------- */



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


    const navigateTo = useNavigate();
    const { closeRegisterModal } = useModal();

    /*   FORMATA A DATA DE CADASTRO */
    const data_cadastro = Date();
    const formatingDate = data_cadastro.replace(formateDate, "$3/$2/$4");
    const formattedDate = formatingDate.slice(0, 11);

    /* REGISTRO DE USUARIOS */
    const user = {
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
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3005/users', user)
            .then(() => {
                window.location.reload()
            })
            .catch((error) => console.log(error));
    }


    return (
        <React.Fragment>
            <div className='containerModalLogin'>

                <div className='registerFormContainer'>
                    <AiOutlineClose className='closeBtnRegisterModal' onClick={closeRegisterModal} />
                    <div className='imageBoxRegister'>
                        <img src={imageRegister} alt="img" width={300} height={300} />
                    </div>

                    <form onSubmit={handleRegisterSubmit}>
                        <div className='registerBox'>
                            <label htmlFor="registerEmail">Email: </label> <br />
                            <input
                                type="text"
                                name="registerEmail"
                                className='registerInputs'
                                id="registerEmail" placeholder="aaa@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={emailValidate}
                                ref={emailRegisterRef}
                                required
                            />
                            <label htmlFor="registerConfirmEmail">Confirme seu Email: </label> <br />
                            <input
                                type="text"
                                name="registerConfirmEmail"
                                id="registerConfirmEmail"
                                className='registerInputs'
                                placeholder="aaa@email.com"
                                value={confirmEmail}
                                onChange={(e) => setConfirmEmail(e.target.value)}
                                onBlur={emailValidate}
                                ref={confirmEmailRef}
                                required
                            />

                        </div>

                        <div className='registerBox'>
                            <label htmlFor="registerSenha">Senha: </label> <br />
                            <input
                                type="password"
                                ref={passwordRef}
                                name="registerSenha"
                                id="registerSenha"
                                className='registerInputs'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={passwordValidate}
                                required
                            />

                            <label htmlFor="registerConfirmESenha">Confirme sua senha: </label> <br />
                            <input
                                type="password"
                                name="registerConfirmSenha"
                                ref={confirmPasswordRef}
                                id="registerConfirmSenha"
                                className='registerInputs'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onBlur={passwordValidate}
                                required
                            />
                        </div>

                        <div className='registerBox'>
                            <label htmlFor="registerNome">Nome: </label> <br />
                            <input
                                type="text"
                                name="registerNome"
                                ref={nameRegisterRef}
                                id="registerNome"
                                className='registerInputs'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={validationName}
                                required
                            />

                            <label htmlFor="registerSobrenome">Sobrenome: </label> <br />
                            <input
                                type="text"
                                name="registerSobrenome"
                                ref={lastNameRegisterRef}
                                id="registerSobrenome"
                                className='registerInputs'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                onBlur={validationName}
                                required
                            />
                        </div>

                        <div className='registerBox'>
                            <label htmlFor="cpf">CPF: </label> <br />
                            <input
                                type="text"
                                name="cpf"
                                id="cpf"
                                ref={cpfRef}
                                className='registerInputs'
                                placeholder="XXX.XXX.XXX-XX"
                                maxLength={11}
                                value={cpf}
                                onChange={handleChangeCPF}
                                onBlur={validateCPF}
                                required
                            />

                            <label htmlFor="registerTelefone">Telefone: </label> <br />
                            <input
                                type="text"
                                name="registerTelefone"
                                ref={celRegisterRef}
                                id="registerTelefone"
                                className='registerInputs'
                                maxLength={11}
                                placeholder="(XX) XXXXX-XXXX"
                                value={cel}
                                onChange={handleChangeCel}
                                onBlur={validateCel}
                                required
                            />
                        </div>

                        <div className='registerBox'>

                            <select name="registerUf"
                                className='registerSelect'
                                id="registerUf"
                                onChange={handlerSelectUf}
                                required
                            >
                                <option value="0">Selecione o Estado</option>
                                {ufs.map((uf) => (
                                    <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                                ))}
                            </select>

                            <select name="registerCidade"
                                className='registerSelect'
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
                            <label htmlFor="registerRua">Rua: </label> <br />
                            <input
                                type="text"
                                name="registerRua"
                                id="registerRua"
                                className='registerInputs'
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                                required

                            />

                            <label htmlFor="registerNumero">Número da casa: </label> <br />
                            <input
                                type="text"
                                name="registerNumero"
                                id="registerNumero"
                                className='registerInputs'
                                value={numeroCasa}
                                onChange={(e) => setNumeroCasa(e.target.value)}
                                required

                            />
                        </div>

                        <div className='googleRegisterBox'>
                            <div id="buttonDiv"></div>
                        </div>

                        <div className='buttonRegisterBox'>
                            <button type='submit'>CADASTRAR</button>
                        </div>

                        <div className='errorBox'>
                            {passwordErr && <p>A senha precisa ter A-a-@-1 !</p>}
                            {diffPassword && <p>As senhas não são iguais!</p>}
                            {emptyPassword && <p>Sua senha precisa de no minímo 6 digitos!</p>}
                            {emailErr && <p>Por favor digite um email valído!</p>}
                            {diffEmail && <p>Os email estão diferentes!</p>}
                            {nameErr && <p>Digite um nome válido!</p>}
                            {lastNameErr && <p>Digite um sobrenome válido!</p>}
                            {cpfErr && <p>Digite um CPF válido</p>}
                            {celErr && <p>Digite um telefone válido</p>}
                        </div>


                    </form>


                </div>
            </div>
        </React.Fragment>
    )
}



export default RegisterForm;