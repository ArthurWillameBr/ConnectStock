
import { UseStock } from "../hooks/useStock";
export function ItemsTable() {
    const {items} = UseStock()
  return (
    <table className="flex justify-center">
      <thead className="bg-zinc-900">
        <tr className="flex gap-52 py-4 px-8 rounded text-lg shadow-lg">
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categorias</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity} unid.</td>
              <td>{item.category}</td>
              <td>
                <Link to={`/items/${item.id}`}>ver</Link>
                <Link  to={`/items/${item.id}/update`}>Atualizar</Link>
              </td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}
