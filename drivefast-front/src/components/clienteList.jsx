export default function ClienteList ({ clientes }) {
    return (
        <div>
          <h2>Lista de Clientes</h2>
      
          {clientes.length === 0 ? (
            <p>Nenhum cliente cadastrado.</p>
          ) : (
            <ul>
              {clientes.map((c) => (
                <li key={c.id}>
                  <strong>ID:</strong> {c.id} <br />
      
                  <strong>{c.nome}</strong>
                  <br />
      
                  CNH: {c.cnh} <br />
                  Email: {c.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
}