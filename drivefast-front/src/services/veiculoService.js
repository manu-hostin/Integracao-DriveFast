import API_URL from "./api";

export async function listarVeiculos () {
    const response = await fetch (`${API_URL}/veiculos`)
    return response.json();
}

export async function cadastrarVeiculo (veiculo) {
    await fetch (`${API_URL}/veiculos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(veiculo)
    });
}