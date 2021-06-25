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
import firebase from "./firebase";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);
  const [images, setImages] = useState(null);

  const ref = firebase.firestore().collection("products");
  const ImgRef = firebase.firestore().collection("images");

  // getProduct
  const getProductList = () => {
    ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setProducts(list);
    });
  };

  //getImageList
  const getImageList = () => {
    ImgRef.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setImages(list);
    });
  };

  //deleteProduct
  const deleteProduct = (id) => {
    console.log(id);
    ref
      .doc(id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
    alert("삭제가 완료 되었습니다.");
  };

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

    getImageList();
    getProductList();
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

  return (
    <Router>
      <div>
        <body className="box-border m-0  w-full  ">
          <Nav />

          <SearchBar
            searchTerm={searchTerm}
            // searchKeyword={searchHandler}
            searchResults={searchResults}
          />

          <Route
            path="/"
            exact
            render={() =>
              searchTerm.length <= 0 ? (
                <Products products={products} images={images} />
              ) : (
                " "
              )
            }
          />

          <Route
            path="/enroll"
            exact
            render={() => (
              <>
                <Enroll />
              </>
            )}
          />
          <Route
            path="/detail/:id"
            render={() => (
              <Detail
                images={images}
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
