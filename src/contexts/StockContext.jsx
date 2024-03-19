//StockContext

import { createContext, useState } from "react";
import  PropTypes  from "prop-types"

export const StockContext = createContext({})



export const StockContextProvider = ( { children } ) => {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('connect-stock-storage')
        if (!storedItems) return []
        const items = JSON.parse(storedItems)
        items.forEach((item) => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        })
        return items
    })

    const addItems = (item) => {
        setItems(currentState => {
            const updatedItems = [item, ...currentState]
            localStorage.setItem('connect-stock-storage', JSON.stringify(updatedItems));
            return updatedItems
        })
    }
    const stock = {
        items,
        addItems, 
    }

    
    return(
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )

}

StockContextProvider.propTypes = {
    children: PropTypes.node
}