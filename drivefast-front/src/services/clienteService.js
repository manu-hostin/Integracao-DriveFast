import API_URL from "./api";

export async function listarClientes() {
    const response = await fetch(`${API_URL}/clientes`);
    return response.json();
}

export async function cadastrarCliente(cliente) {
    await fetch(`${API_URL}/clientes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cliente)
    });
  }