//fazer validação com zod

import { useState } from "react";

const CATEGORIES = [
    'Jogos',
    'Livro',
    'Brinquedos',
    'Acessórios'
    

]
export function ItemForm({ itemToUpdate }) {
    const defaultItem = {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        category: '',
    }
    const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)

    function handleChange(e) {
        setItem(currentState => {
            return {
             ...currentState,
                [e.target.name]: e.target.value
            }
        })
    }
  return (
    <form>
      <div className="flex justify-center gap-20">
        <div className="flex flex-col">
          <label htmlFor="name">Nome</label>
          <input
            className="bg-zinc-900 p-2 outline-none border-[3px] border-zinc-900 rounded focus:border-blue-600"
            type="text"
            name="name"
            id="name"
            
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity">Quantidade</label>
          <input
            className="bg-zinc-900 p-2 outline-none border-[3px] border-zinc-900 rounded focus:border-blue-600"
            type="text"
            name="quantity"
            id="quantity"
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Preço</label>
          <input
            className="bg-zinc-900 p-2 outline-none border-[3px] border-zinc-900 rounded focus:border-blue-600"
            type="number"
            name="price"
            id="price"
            value={item.price}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">Categoria</label>
          <select
            className="bg-zinc-900 px-4 py-2 outline-none border-[3px] border-zinc-900 rounded focus:border-blue-600"
            type="text"
            name="category"
            id="category"
            value={item.category}
            onChange={handleChange}
          >
            <option disabled value="">
              Selecione a Categoria...
            </option>
            {CATEGORIES.map((category) => (
              <option
                key={category}
                value={category}
                defaultChecked={item.category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center mt-12 " >
        <div className="flex w-3/4 m-2 ">
        <label className="text-lg" htmlFor="description">Descrição</label>

        </div>
        <textarea
          className="w-3/4 h-36 bg-zinc-900 resize-none"
          name="description"
          id="description"
          value={item.description}
          onChange={handleChange}
        >

        </textarea>
        <div className="flex mt-4 w-3/4 ">
        <button className="px-6 py-4 bg-blue-600 rounded">
        Salvar
        </button>
        </div>
      </div>
     
    </form>
  );
}
