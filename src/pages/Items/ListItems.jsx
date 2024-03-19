import { Outlet } from "react-router-dom";
import { ItemsTable } from "../../components/ItemsTable";

export function ListItems() {
  return (
    <div>
      <ItemsTable/>
    </div>
  );
}
