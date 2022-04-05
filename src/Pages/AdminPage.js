import React ,{useState,useEffect} from 'react'
import Layout from "../Components/Layout"
import { collection ,getDocs } from 'firebase/firestore'
import { FaEdit, FaTrash } from "react-icons/fa";
import {fireDB} from '../firebase'

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false); 

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


  return (
    <>
            <Layout>
                <h3>Products List</h3>

                <table className="table mt-3">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
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
                    <td>{item.category}</td>
                    <td>{item.address}</td>
                    <td>
                      <FaTrash
                        color="red"
                        size={20}
                        // onClick={() => {
                        //   deleteProduct(item);
                        // }}
                      />

                      <FaEdit
                        // onClick={() => editHandler(item)}
                        color="blue"
                        size={20}
                      />
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>






            </Layout>
    </>
  )
}

export default AdminPage