import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

export function UseStock() {
    return useContext(StockContext)
}