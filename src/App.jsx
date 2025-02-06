import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ProductProvider } from "./Components/Home/Home";
import HomePage from "./Components/HomePage";
import AppRoutes from "./Components/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <AppRoutes />
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
