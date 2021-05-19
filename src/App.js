import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Enroll from "./pages/Sell/Enroll";
import Detail from "./pages/Buy/Detail";
import Revise from "./pages/Sell/Revise";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import Products from "./components/Products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const renderProductList = products.map((product) => {
  //   return <Search product={product} key={product.id} />;
  // });

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };

    getProducts();
  }, []);

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    return data;
  };

  // // Fetch Product
  // const fetchProduct = async (id) => {
  //   const res = await fetch(`http://localhost:5000/products/${id}`);
  //   const data = await res.json();

  //   return data;
  // };

  //add product
  const addProduct = async (product) => {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    setProducts([...products, data]);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newProductsList = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newProductsList);
    } else {
      setSearchResults("");
    }
  };

  return (
    <Router>
      <div>
        <body className="box-border m-0 border-0 w-full border-4 ">
          <Nav />

          <SearchBar
            searchTerm={searchTerm}
            searchKeyword={searchHandler}
            searchResults={searchResults}
          />

          <Route
            path="/"
            exact
            render={() =>
              searchTerm.length <= 0 ? <Products products={products} /> : " "
            }
          />

          <Route
            path="/enroll"
            exact
            render={() => (
              <>
                <Enroll onAdd={addProduct} />
              </>
            )}
          />

          <Route path="/detail/:id" component={Detail} />

          <Route path="/revise" component={Revise} />
        </body>
      </div>
    </Router>
  );
};

export default App;
