import { Link } from "react-router-dom";
import { UseStock } from "../hooks/useStock";
import { DeleteButton } from "./DeleteButton";
export function ItemsTable() {
  const { items } = UseStock();

  return (
    <div className="w-screen flex flex-col items-center ">
      <div className="w-[96%] bg-zinc-900 p-4 mx-2 flex justify-around gap-20">
        <p className="">ID</p>
        <p className="">Nome</p>
        <p className="">Em Estoque</p>
        <p className="">Categorias</p>
        <p className="">Ações</p>
      </div>

      <div className=" flex w-full flex-col gap-6 mt-4">
        {items.map((item) => (
          <div className="flex w-full justify-around " key={item.id}>
            <div className="flex w-2/3 gap-52 text-nowrap text-start ml-10">
              <div className="w-6">
                <p>{item.id}</p>
              </div>
              <div className="ml-12">
                <p className="w-16">{item.name}</p>
              </div>
              <div className="w-16 ml-8">
                <p>{item.quantity} unid.</p>
              </div>
              <div className="w-16 ml-16">
                <p>{item.category}</p>
              </div>
            </div>
            <div className="flex gap-4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
