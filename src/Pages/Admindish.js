import React ,{useState,useEffect} from 'react'
import Layout from "../Components/Layout"
import { collection, addDoc ,getDocs ,setDoc , doc , deleteDoc } from 'firebase/firestore'
import { FaEdit, FaTrash } from "react-icons/fa";
import {fireDB} from '../firebase'
import {Modal} from "react-bootstrap"
import { toast } from 'react-toastify';


const Admindish = () => {
    const [products, setProducts] = useState([]);

    
    const [product, setProduct] = useState({
        dishname:"",
        dishURL:"",
        price:"",
        category:"",
    });

    const [show,setShow] = useState(false);
    const [add, setAdd] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        getData();
    },[]);


    async function getData() {
        try {
        //   setLoading(true);
          const users = await getDocs(collection(fireDB, "dishes"));
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
        //   setLoading(false);
        }
      }

      const editHandler =(item) => {
          setProduct(item);
          setShow(true);
      };

      const updateProduct = async() =>{
          try {
              await setDoc(doc(fireDB , "dishes" , product.id),product)
              handleClose()
              toast.success("Dish Updated successfully")
              window.location.reload()
          } catch (error) {
            toast.error("Dish Updated Failed")
          }
      }


      const addHandler = () =>{
          setAdd(true);
          handleShow();
      }

      const addProduct = async () =>{
          try {
            await addDoc(collection(fireDB,"dishes"), product)
            handleClose()
            toast.success("Dish Added successfully")
            window.location.reload()
          } catch (error) {
            toast.error("Dish Added Failed")
          }
      }

      const deleteProduct = async (item) =>{
          try {
              await deleteDoc(doc(fireDB , "dishes" , item.id));
              toast.success("Dish Deleted successfully");
              getData()
          } catch (error) {
            toast.error("Dish Deleted Failed")
          }
      }
  return (
    <>
            <Layout>
                        
            <div className="d-flex justify-content-between">
            <h3>Dishes List</h3>
            <button onClick={addHandler}>ADD DISHES</button>
            </div>
            

                <table className="table mt-3">
            <thead>
              <tr>
                <th>Image</th>
                <th>Dish Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr>
                    <td>
                      <img src={item.dishURL} alt={""} height="150" width="150" />
                    </td>
 
                    <td>{item.dishname}</td>
                    <td>₹{item.price}</td>
                    <td>{item.category}</td>
                    
                    <td>
                      <FaTrash
                        color="red"
                        size={20}
                        onClick={() => {
                          deleteProduct(item);
                        }}
                      />

                      <FaEdit
                        onClick={() => editHandler(item)}
                        color="blue"
                        size={20}
                      />
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {add === true ? "Add a product" : "Edit Product"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <div className="register-form">
                <input
                  type="text"
                  value={product.dishname}
                  className="form-control"
                  placeholder="dishname"
                  onChange={(e) =>
                    setProduct({ ...product, dishname: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={product.price}
                  className="form-control"
                  placeholder="price"
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={product.dishURL}
                  placeholder="dish url"
                  className="form-control"
                  onChange={(e) =>
                    setProduct({ ...product, dishURL: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={product.category}
                  className="form-control"
                  placeholder="category"
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                />

                <hr />
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <button>Close</button> */}
              {add ? (
                <button onClick={addProduct}>SAVE</button>
              ) : (
                <button onClick={updateProduct}>SAVE</button>
              )}
            </Modal.Footer>
          </Modal>


            </Layout>
    </>
  )
}

export default Admindish