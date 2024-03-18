import { createContext, useState } from "react";
import { json } from "react-router-dom";

export const StockContext = createContext({})

export function StockContextProvider({children}) {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('connect-stock-storage')
        if (!storedItems) return []
        const items = JSON.parse(storedItems)
        items.foreach((item) => {
            item.createdAt = new Date(item.createdAt)
            item.updateAt = new Date(item.uptadeAt)
        })
        return items
    })

    const addItems = (item) => {
        setItems(currentState => {
            const updadeItems = [item, ...currentState]
            localStorage.setItem('connect-stock-storege', JSON.stringify(updadeItems));
            return updadeItems
        })
    }
    const stock = {
        items,
        addItems
    }
    return(
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )

}