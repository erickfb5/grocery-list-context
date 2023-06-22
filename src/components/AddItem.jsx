import { useContext, useRef } from "react";
import { FaPlus } from "react-icons/fa";

import { handleSubmit } from "../utils";
import DataContext from "../context/DataContext";

const AddItem = () => {
  const inputRef = useRef();
  const { items, setItems, newItem, setNewItem } = useContext(DataContext);
  return (
    <form
      className="addForm"
      onSubmit={(event) => handleSubmit(event, items, setItems, newItem, setNewItem)}
    >
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        autoComplete="off"
        maxLength={50}
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;