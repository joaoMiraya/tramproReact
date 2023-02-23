
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';


function RegisterForm() {

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


    return (
        <React.Fragment>
            <div className='registerFormContainer'>


                <form action="#">
                    <div className='registerBox'>
                        <label for="registerEmail">Email: </label> <br />
                        <input type="text" name="registerEmail" id="registerEmail" placeholder="aaa@email.com" />

                        <label for="registerConfirmEmail">Confirme seu Email: </label> <br />
                        <input type="text" name="registerConfirmEmail" id="registerConfirmEmail" placeholder="aaa@email.com" />
                    </div>

                    <div className='registerBox'>
                        <label for="registerSenha">Senha: </label> <br />
                        <input type="password" name="registerSenha" id="registerSenha" />

                        <label for="registerConfirmESenha">Confirme sua senha: </label> <br />
                        <input type="password" name="registerConfirmSenha" id="registerConfirmSenha" />
                    </div>

                    <div className='registerBox'>
                        <label for="registerNome">Nome: </label> <br />
                        <input type="text" name="registerNome" id="registerNome" />

                        <label for="registerSobrenome">Sobrenome: </label> <br />
                        <input type="text" name="registerSobrenome" id="registerSobrenome" />
                    </div>

                    <div className='registerBox'>
                        <label for="registerCpf">CPF: </label> <br />
                        <input type="text" name="registerCpf" id="registerCpf" placeholder="XXX.XXX.XXX-XX" />

                        <label for="registerTelefone">Telefone: </label> <br />
                        <input type="text" name="registerTelefone" id="registerTelefone" placeholder="(XX) XXXXX-XXXX" />
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
                        >
                            <option value="0">Selecione a Cidade</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.nome}>{city.nome}</option>
                            ))}
                        </select>
                    </div>

                    <div className='registerBox'>
                        <label for="registerRua">Rua: </label> <br />
                        <input type="text" name="registerRua" id="registerRua" />

                        <label for="registerNumero">Número da casa: </label> <br />
                        <input type="text" name="registerNumero" id="registerNumero"/>
                    </div>

                </form>


            </div>
        </React.Fragment>
    )
}



export default RegisterForm;