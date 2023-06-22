import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => { localStorage.setItem("shoppingList", JSON.stringify(items)) }, [items]);

  return (
    <DataContext.Provider value={{ items, setItems, newItem, setNewItem, search, setSearch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;