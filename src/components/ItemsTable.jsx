
import { UseStock } from "../hooks/useStock";
export function ItemsTable() {
    const {items} = UseStock()
  return (
    <table>
      <thead>
        <tr>
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
