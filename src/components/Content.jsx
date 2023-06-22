import { useContext } from "react";

import { ItemList } from "./";
import DataContext from "../context/DataContext";

const Content = () => {
  const { items, search } = useContext(DataContext);
  const filteredItems = items.filter((item) => item?.item?.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      {filteredItems.length ? <ItemList />
      : <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      }
    </main>
  );
};

export default Content;