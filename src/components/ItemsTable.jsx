//ItemsTable

import { Link } from "react-router-dom";
import { UseStock } from "../hooks/useStock";
export function ItemsTable() {
  const { items } = UseStock();

  return (
    <table className="flex flex-col mx-14  ">
      <thead className="">
        <tr className="flex  bg-zinc-900 py-4 px-8 rounded text-lg shadow-lg">
          <th className="mx-12">ID</th>
          <th className="mx-32">Nome</th>
          <th className="mx-12">Em Estoque</th>
          <th className="mx-24">Categorias</th>
          <th className="ml-20">Ações</th>
        </tr>
      </thead>
      <tbody className="mx-2  ">
        {items.map((item) => (
          <tr className="flex m-4 gap-[12rem] items-center  h-16" key={item.id}>
            <div className="w-10">
              <td>{item.id}</td>
            </div>
            <div className="w-10 ">
              <td>{item.name}</td>
            </div>
            <div className="w-36">
              <td>{item.quantity} unid.</td>
            </div>
            <div className="w-[30%]">
              <td>{item.category}</td>
            </div>

            <td className="flex gap-8 h-16 items-center">
              <div>
                <Link
                  className="bg-blue-600 px-4 py-2 rounded cursor-pointer"
                  to={`/items/${item.id}`}
                >
                  ver
                </Link>
              </div>
              <div>
                <Link
                  className="bg-slate-600 px-4 py-2 rounded cursor-pointer"
                  to={`/items/${item.id}/update`}
                >
                  Atualizar
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
