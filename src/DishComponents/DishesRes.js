import React from 'react'
import Layout from "../Components/Layout"
import { collection , getDocs} from "firebase/firestore";
import {fireDB} from "../firebase";
// import { CartContext } from '../global/CartContext.js';


function DishesRes() {

  const [productss, setProductss] = React.useState([]);
  const [searchKey, setSearchKey] = React.useState("");
  const [filterType, setFilterType] = React.useState("");
  
  // const {products} = useContext(CartContext);
  // const {dispatch} = useContext(CartContext);

    React.useEffect(() => {
    getData();
  }, []);


  async function getData() {
    try {
      
      const users = await getDocs(collection(fireDB, "dishes"));
      const productssArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productssArray.push(obj);
        
      });

      setProductss(productssArray);
    } catch (error) {
      console.log(error);
      
    }
  }





  return (
    <>
      <Layout>


      <div className="container">
        <div className="d-flex w-50 align-items-center my-3 justify-content-center">
           <input
            type="text"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            className="form-control mx-2"
            placeholder="Search Dishes"

          />
          <select
            className="form-control mt-3"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
          >
            
            <option value="">All</option>
            <option value="drink">Drink</option>
            <option value="desserts">Desserts</option>
            <option value="pizza">Pizza</option>
            <option value="lunch">Lunch</option>

          </select>
        </div> 
        </div>
        <div className="row">
          {productss.filter(obj=>obj.dishname.toLowerCase().includes(searchKey))
            .filter((obj)=>obj.category.toLowerCase().includes(filterType))
          .map((product) => {
              return (
                <div className="col-md-4">
                  <div className="m-2 p-1 product position-relative">
                    <div className="product-content">
                      <p>{product.dishname}</p>
                      <div className="text-center">
                        <img
                          src={product.dishURL}
                          alt=""
                          className="product-img"
                        />
                      <p>₹{product.price}</p>
                     
                   <button className='btn btn-outline-danger'>ADD TO CART</button>
                      </div>
                    </div>
{/* <div className="product-actions">

<div className="d-flex">


</div>
</div> */}
                  </div>
                </div>
              );
            })}
        </div>
      </Layout>
    </>
  )
}

export default DishesRes