import PropTypes from 'prop-types'
import { UseStock } from '../hooks/useStock'
DeleteButton.propTypes = {
    itemName: PropTypes.string,
    itemId: PropTypes.number,
}

export function DeleteButton( {itemName, itemId}) {
    const { deleteItems } = UseStock()

    function handleDelete() {
        if(confirm(`Tem certeza que deseja excluir o item ${itemName}?`)){
            deleteItems(itemId)
        }
    }
    return (
        <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleDelete}
        >
            Excluir
        </button>
    )
}


