import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";

import { handleCheck, handleDelete } from "../utils";
import DataContext from "../context/DataContext";

const ItemList = () => {
  const { items, setItems, search } = useContext(DataContext);
  const filteredItems = items.filter((item) => item?.item?.toLowerCase().includes(search.toLowerCase()))
  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id} className="item">
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id, filteredItems, setItems)}
            checked={filteredItems.checked}
          />
          <label
            style={filteredItems.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleCheck(item.id, filteredItems, setItems)}
          >
            {item.item}
          </label>
          <FaTrashAlt
            onClick={() => handleDelete(item.id, filteredItems, setItems)}
            role="button"
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
