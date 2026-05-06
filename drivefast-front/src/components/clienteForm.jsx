"use client";

import { useState } from "react";

export default function ClienteForm ({ onSalvar }) {
    const [nome, setNome] = useState("");
    const [cnh, setCnh] = useState("");
    const [email, setEmail] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        await onSalvar({ nome, cnh, email });

        setNome("");
        setCnh("");
        setEmail("");

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            ></input>

            <input
                placeholder="CNH"
                value={cnh}
                onChange={(e) => setCnh(e.target.value)}
            ></input> 

            <input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>

            <button type="submit">Cadastrar Cliente</button>
        </form>
    );
}