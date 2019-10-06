import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }){
    const[email, setEmail] = useState('');
    const[nome, setNome] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    
    // //Email e Nome
    // console.log(nome, email);
    
    const response = await api.post('/sessions', {
      nome, 
      email
    });

    const { id } = response.data;
    localStorage.setItem("user", id);

    history.push('/dashboard');
  }

    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input 
            type="text"
            id="nome" 
            placeholder="Seu nome" 
            value={nome}
            onChange={event => setNome(event.target.value)}/>

            <label htmlFor="email">Email*</label>
            <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail" 
            value={email} 
            onChange={event => setEmail(event.target.value)}/>

            <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}