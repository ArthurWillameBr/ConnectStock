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
      <div className="row">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <input
            type="text"
            name="price"
            id="price"
            value={item.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select
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
      <div>
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          value={item.description}
          onChange={handleChange}
        >

        </textarea>
      </div>
      <button>
        Salvar
        </button>
    </form>
  );
}
