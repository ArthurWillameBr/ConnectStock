import { useRef, useState } from "react";
import StockItem from "../entities/StockItem";
import { UseStock } from "../hooks/useStock";
import PropTypes from "prop-types";
//import { useForm } from "react-hook-form";

const CATEGORIES = ["Jogos", "Livro", "Brinquedos", "Acessórios"];
ItemForm.propTypes = {
  itemToUpdate: PropTypes.object,
};
export function ItemForm({ itemToUpdate }) {
  const defaultItem = {
    name: "",
    descriptio: "",
    price: "",
    quantity: "",
    category: "",
  };

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem);
  const { addItems, uptadeItem } = UseStock();
  const inputRef = useRef(null);
  //const { register, handleSubmit } = useForm();
  function handleChange(e) {
    setItem((currentState) => {
      return {
        ...currentState,
        [e.target.name]: e.target.value,
      };
    });
  }
  
  function handleSubmitOn(e) {
    e.preventDefault();
    try {
      if (itemToUpdate) {
        uptadeItem(itemToUpdate.id, item);
        alert(`O item ${item.name} foi atualizado com sucesso!`);
      } else {
        const validItem = new StockItem(item);
        addItems(validItem);
        alert("item cadastrado com sucesso");
        inputRef.current.focus();
        setItem(defaultItem);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmitOn}>
      <div className="flex justify-center gap-20">
        <div className="flex flex-col">
          <label htmlFor="name">Nome</label>
          <input
            className="bg-zinc-900 p-2 outline-none border-[3px] border-zinc-900 rounded focus:border-blue-600"
            type="text"
            id="name"
            ref={inputRef}
            name="name"
            defaultValue={item.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity">Quantidade</label>
          <input
            className="bg-zinc-900 p-2 outline-none border-[3px] border-zinc-900 rounded focus:border-blue-600"
            type="number"
            value={item.quantity}
            id="quantity"
            name="quantity"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Preço</label>
          <input
            className="bg-zinc-900 p-2 outline-none border-[3px] border-zinc-900 rounded focus:border-blue-600"
            type="number"
            value={item.price}
            id="price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">Categoria</label>
          <select
            className="bg-zinc-900 px-4 py-2 outline-none border-[3px] border-zinc-900 rounded focus:border-blue-600"
            type="text"
            value={item.category}
            id="categoty"
            name="category"
            onChange={handleChange}
          >
            <option disabled value="">
              Selecione a Categoria...
            </option>
            {CATEGORIES.map((category) => (
              <option
                key={category}
                value={category}
                defaultChecked={item.category === category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center mt-12 ">
        <div className="flex w-3/4 m-2 ">
          <label className="text-lg" htmlFor="description">
            Descrição
          </label>
        </div>
        <textarea
          className="w-3/4 h-36 bg-zinc-900 resize-none rounded border-zinc-900 outline-none border-[3px] focus:border-blue-600"
          name="description"
          id="description"
          value={item.description}
          onChange={handleChange}
        ></textarea>
        <div className="flex mt-4 w-3/4 ">
          <button className="px-6 py-4 bg-blue-600 rounded" type="submit">
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
}
