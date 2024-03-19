import { Link } from "react-router-dom";
import { UseStock } from "../hooks/useStock";
import { DeleteButton } from "./DeleteButton";
export function ItemsTable() {
  const { items } = UseStock();

  return (
    <table className="">
<thead className=" bg-zinc-900">
  <tr className="w-screen flex justify-around gap-20">
    <th className="">ID</th>
    <th className="">Nome</th>
    <th className="">Em Estoque</th>
    <th className="">Categorias</th>
    <th className="">Ações</th>
  </tr>
</thead>

<tbody className=" flex flex-col items-center gap-4">
  {items.map((item) => (
    <tr className="flex gap-52 mx-10 " key={item.id}>
      <td>{item.id}</td>
      <td className="w-16">{item.name}</td>
      <td>{item.quantity} unid.</td>
      <td>{item.category}</td>

      <td className=" w-full flex justify-center gap-4">
      
          <Link
            className="bg-blue-600 px-4 py-2 rounded cursor-pointer"
            to={`/items/${item.id}`}
          >
            ver
          </Link>
        
      
          <Link
            className="bg-slate-600 px-4 py-2 rounded cursor-pointer"
            to={`/items/${item.id}/update`}
          >
            Atualizar
          </Link>
          <DeleteButton />
        
      </td>
    </tr>
  ))}
</tbody>
</table>
  )
}