import { UseStock } from "../../hooks/useStock";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DeleteButton } from "../../components/DeleteButton";
export function ShowItems() {

  const { getItems } = UseStock();
  const { id } = useParams();

  const item = getItems(id);

  return (
    <div className="m-8">
        <div className=" flex justify-center m-6">
        <h1 className="text-4xl">{item.name}</h1>
        </div>
        <div className="flex gap-10 justify-center"> 
                                                                            
      <Link className="bg-slate-600 px-4 py-2 rounded cursor-pointer" to={`/items/${item.id}/update`} >Atualizar</Link>
      <DeleteButton itemId={item.id} itemName={item.name} />
      </div>
      <div className="flex justify-center gap-10 mt-10 text-center items-center">
        <span className="bg-slate-900 p-4 rounded-lg">Categoria: {`${item.category}`}</span>
        <span className="bg-slate-900 p-4 text-nowrap w-62  rounded-lg">Quantidade em estoque: {`${item.quantity}`}</span>
        <span className="bg-slate-900 p-4  rounded-lg">Preço: {`${item.price}`}</span>
      </div>
      <div className="flex mt-10">
      <p>{`${item.description}`}</p>
      </div>
      <div className="flex gap-8 mt-12 ">
        <p>Cadastrado em: {item.createdAt.toDateString()}</p>
        <p>Atualizado em: {item.updatedAt.toDateString()}</p>
      </div>
    </div>
  );
}
