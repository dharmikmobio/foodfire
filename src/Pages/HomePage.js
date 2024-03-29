import React from 'react'
import Layout from '../Components/Layout';
import {collection, getDocs} from 'firebase/firestore';
// import {addDoc} from 'firebase/firestore';
import { fireDB } from '../firebase';
// import { fireproducts } from '../firecommerce-products';





// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
function Homepage() {
   const [products, setProducts] = React.useState([]);
  // const { cartItems } = useSelector((state) => state.cartReducer);
  // const [loading, setLoading] = useState(false);
  // const [searchKey, setSearchKey] = useState("");
  // const [filterType, setFilterType] = useState("");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      // setLoading(true);
      const users = await getDocs(collection(fireDB, "Restaurants"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productsArray.push(obj);
        // setLoading(false);
      });

      setProducts(productsArray);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  }

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  // const addToCart = (product) => {
  //   dispatch({ type: "ADD_TO_CART", payload: product });
  // };

  return (
    <>
    <Layout>
      <div className="container">
        <div className="d-flex w-50 align-items-center my-3 justify-content-center">
          {/* <input
            type="text"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            className="form-control mx-2"
            placeholder="search items"

          />
          <select
            className="form-control mt-3"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="mobiles">Mobiles</option>
            <option value="fashion">Fashion</option>
          </select>
        </div> */}
        </div>
        <div className="row">
          {products.map((product) => {
              return (
                <div className="col-md-4">
                  <div className="m-2 p-1 product position-relative">
                    <div className="product-content">
                      <p>{product.name}</p>
                      <div className="text-center">
                        <img
                          src={product.imageURL}
                          alt=""
                          className="product-img"
                        />
                      <p>{product.address}</p>
                      <p>{product.number}</p>
                      </div>
                    </div>
                    <div className="product-actions">
                      {/* <h2>{product.price} RS/-</h2> */}
                      <div className="d-flex">
                        {/* <button
                          className="mx-2"
                          onClick={() => addToCart(product)}
                        >
                          ADD TO CART
                        </button> */}
                       
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
    </>
  );
}

export default Homepage;
