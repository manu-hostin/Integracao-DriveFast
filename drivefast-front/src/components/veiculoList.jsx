export default function VeiculoList ({ veiculos }) {
    return (
        <div>
            <h2>Lista de Veículos</h2>
            {veiculos.length === 0 ? (
                <p>Nenhum veículo cadastrado.</p>
            ) : (
                <ul>
                    {veiculos.map((v) => (
                        <li key={v.id}>
                            <strong>ID:</strong> {v.id} <br></br>
                            <strong>{v.nome}</strong>
                            <br></br>

                            Marca: {v.marca}
                            Modelo: {v.modelo}
                            Placa: {v.placa}
                            Valor da diária: R$ {v.valor}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}