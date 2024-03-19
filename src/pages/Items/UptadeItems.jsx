import { UseStock } from "../../hooks/useStock";
import { useParams } from "react-router-dom";
import { ItemForm } from "../../components/ItemForm";

export function UpdateItems() {
  const { getItems } = UseStock();
  const { id } = useParams();

  const item = getItems(id);

  return (
    <div>
      <h1 className="text-5xl t text-center">Update Items</h1>
      <ItemForm itemToUpdate={item} />
    </div>
  );
}
