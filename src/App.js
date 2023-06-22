import { Header, Content, Footer, AddItem, SearchItem } from "./components";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="App">
      <Header title="Grocery List App" />
      <DataProvider>
        <AddItem />
        <SearchItem />
        <Content />
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;