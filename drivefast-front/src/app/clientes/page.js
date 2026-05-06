"use client";

import { useEffect, useState } from "react";
import { listarClientes } from "@/services/clienteService";
import ClienteList from "@/components/clienteList";
import ClienteForm from "@/components/clienteForm";
import { cadastrarCliente } from "@/services/clienteService";

export default function ClientesPage () {
    const [clientes, setClientes] = useState([]);

    async function carregarClientes () {
        const data = await listarClientes();
        setClientes(data);
    }

    async function salvarCliente (cliente) {
        await cadastrarCliente(cliente);
        carregarClientes();
    }

    useEffect(() => {
        carregarClientes();
    }, []);

    return (
        <div>
            <h1>Clientes</h1>

            <ClienteForm onSalvar={salvarCliente}></ClienteForm>
            <ClienteList clientes={clientes}></ClienteList>

        </div>
    );
}