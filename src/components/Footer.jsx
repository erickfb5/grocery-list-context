import { useContext } from "react";

import DataContext from "../context/DataContext";

const Footer = () => {
  const { items: { length } } = useContext(DataContext);
  return (
    <footer>
      {length !== 0 && (
        <p>
          {length} List {length === 1 ? "item" : "items"}
        </p>
      )}
    </footer>
  );
};

export default Footer;