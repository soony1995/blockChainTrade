import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Enroll from "./pages/Sell/Enroll";
import Detail from "./pages/Buy/Detail";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import Products from "./components/Products";
import getWeb3 from "./getWeb3";
import SimpleStorage from "./client/SimpleStorage.json";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  // const renderProductList = products.map((product) => {
  //   return <Search product={product} key={product.id} />;
  // });

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();

      const deployedNetwork = SimpleStorage.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork && deployedNetwork.address
      );
      setAccounts(accounts);
      setContract(instance);
    };

    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };

    getProducts();
    init();
  }, []);

  console.log(accounts, contract);

  //거래서명받기
  const handleSend = async (val) => {
    try {
      if (val > 0) {
        console.log(val);
        await contract.methods.set(val).send({ from: accounts[0] });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 제품 받아오기
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    return data;
  };

  //제품 추가
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

  //제품 삭제
  const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    window.location.href = "http://localhost:3000/";
  };

  //검색 핸들러
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
        <body className="box-border m-0  w-full  ">
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
          <Route
            path="/detail/:id"
            render={() => (
              <Detail
                products={products}
                handleSend={handleSend}
                deleteProduct={deleteProduct}
              />
            )}
          />
        </body>
      </div>
    </Router>
  );
};

export default App;
