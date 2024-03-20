import { Link } from "react-router-dom";
import { UseStock } from "../hooks/useStock";

export function Home() {
  const { items } = UseStock();
  const diversity = items.length;
  const invendory = items.reduce((sum, item) => +sum + +item.quantity, 0);
  const today = new Date();
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 10);
  const recentItems = items.filter(
    (item) => item.createdAt >= limitDate && item.createdAt <= today
  );
  const recentTotal = recentItems.length;

  const lowQuantityItems = items.filter((item) => item.quantity < 10);

  const lowQuantityTotal = lowQuantityItems.length;
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl ml-6 ">Dashboard</h1>
      </div>
      <div className="flex gap-10 justify-center mt-10 ">
        <div className="bg-zinc-900 h-44 w-[22%] rounded-md shadow-lg ">
          <p className="text-xl ml-6 mt-4">Diversidade de itens</p>
          <div className="flex justify-center m-10 text-5xl">
            <span>{diversity}</span>
          </div>
        </div>

        <div className="bg-zinc-900 h-44 w-[22%] rounded-md shadow-lg  ">
          <p className="text-xl ml-6 mt-4">Inventario total</p>
          <div className="flex justify-center m-10 text-5xl">
            <span>{invendory}</span>
          </div>
        </div>

        <div className="bg-zinc-900 h-44 w-[22%] rounded-md shadow-lg  ">
          <p className="text-xl ml-6 mt-4">Itens recentes</p>
          <div className="flex justify-center m-10 text-5xl">
            <span>{recentTotal}</span>
          </div>
        </div>
        <div className="bg-zinc-900 h-44 w-[22%] rounded-md shadow-lg  ">
          <p className="text-xl ml-6 mt-4">Itens acabando</p>
          <div className="flex justify-center m-10 text-5xl">
            <span>{lowQuantityTotal}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="bg-zinc-900 flex justify-between mx-8 mt-6 p-4 ">
            <p>Itens Recentes</p>
            <p>Ações</p>
          </div>

          <div>
            {recentItems.map((item) => (
              <div
                className="hover:bg-zinc-900/50 flex justify-between  mx-8 p-4"
                key={item.id}
              >
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <div>
                    {" "}
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded cursor-pointer"
                      to={`/items/${item.id}`}
                    >
                      ver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[47rem]">
          <div className="bg-zinc-900 flex gap-44 mx-8 mt-6 p-4 h-[3.4rem] ">
            <div>
              <p>Itens Recentes</p>
            </div>
            <div>
              <p>Qtd.</p>
            </div>
            <div className="ml-14">
              <p>Ações</p>
            </div>
          </div>
          <div>
            {lowQuantityItems.map((item) => (
              <div
                className="hover:bg-zinc-900/50 flex justify-between mx-8 p-4"
                key={item.id}
              >
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>{item.quantity}</p>
                </div>
                <div>
                  <div className="mr-10">
                    {" "}
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded cursor-pointer"
                      to={`/items/${item.id}`}
                    >
                      ver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
