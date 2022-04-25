import React ,{useState,useEffect} from 'react'
import { collection, addDoc ,getDocs ,setDoc , doc , deleteDoc } from 'firebase/firestore'
import { FaEdit, FaTrash } from "react-icons/fa";
import {fireDB} from '../firebase'
import {Modal} from "react-bootstrap"
import { toast } from 'react-toastify';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false); 


    const [product, setProduct] = useState({
        name:"",
        imageURL:"",
        category:"",
        address:"",
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
        //   setLoading(false);
        }
      }

      const editHandler =(item) => {
          setProduct(item);
          setShow(true);
      };

      const updateProduct = async() =>{
          try {
              await setDoc(doc(fireDB , "Restaurants" , product.id),product)
              handleClose()
              toast.success("Restaurant Updated successfully")
              window.location.reload()
          } catch (error) {
            toast.error("Restaurant Updated Failed")
          }
      }


      const addHandler = () =>{
          setAdd(true);
          handleShow();
      }

      const addProduct = async () =>{
          try {
            await addDoc(collection(fireDB,"Restaurants"), product)
            handleClose()
            toast.success("Restaurant Added successfully")
            window.location.reload()
          } catch (error) {
            toast.error("Restaurant Added Failed")
          }
      }

      const deleteProduct = async (item) =>{
          try {
              await deleteDoc(doc(fireDB , "Restaurants" , item.id));
              toast.success("Restaurant Deleted successfully");
              getData()
          } catch (error) {
            toast.error("Restaurant Deleted Failed")
          }
      }
  return (
    <>
            {/* <Layout> */}

            <div className="d-flex justify-content-between">
            <h3>Restaurants List</h3>
            <button onClick={addHandler}>ADD RESTAURANT</button>
            </div>
            

                <table className="table mt-3">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Number</th>
                <th>Category</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr>
                    <td>
                      <img src={item.imageURL} alt={""} height="150" width="150" />
                    </td>
 
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td>{item.category}</td>
                    <td>{item.address}</td>
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
                {add === true ? "Add a Restaurant" : "Edit Restaurant"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <div className="register-form">
                <input
                  type="text"
                  value={product.name}
                  className="form-control"
                  placeholder="name"
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={product.number}
                  className="form-control"
                  placeholder="number"
                  onChange={(e) =>
                    setProduct({ ...product, number: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={product.imageURL}
                  placeholder="image url"
                  className="form-control"
                  onChange={(e) =>
                    setProduct({ ...product, imageURL: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={product.address}
                  className="form-control"
                  placeholder="address"
                  onChange={(e) =>
                    setProduct({ ...product, address: e.target.value })
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
  {/* </Layout> */}
    </>
  )
}

export default AdminPage