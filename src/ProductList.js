import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
  
export default function ProductList() {
     
const[product,setproduct] = useState([])
useEffect(async()=>{
    load()
},[])

    async function load(){
        let productdata= await fetch('https://61c19a1d9dbcca0017c81fce.mockapi.io/products')
        let jproduct = await productdata.json()
        setproduct(jproduct)

    }

    async function  DeleteProduct(id) {
        
            try {
                await fetch( `https://61c19a1d9dbcca0017c81fce.mockapi.io/products/${id}`,{
                    method:"DELETE",
                     
                    headers:{
                        "content-type":"application/json"
                    }
                })
                alert("data deleted")
                load()
                
            } 
            catch (error) {
                console.log(error)
            }
            
                  
    }
    return (
        <>
         <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">ProductList</h1>
                        <Link to="/product-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
                    </div>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                        <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Brand</th>
                                             <th>Action</th>
                                             </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Brand</th>
                                             <th>Action</th>
                                             </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            product.map((obj,index)=>{
                                                return <tr key={index}>
                                                <td>{obj.productname}</td>
                                                    <td> {obj.price}</td>
                                                    <td> {obj.brand}</td>
                                                     
                                                    <td><Link to={`/edit-product/${obj.id}`}><button className="btn btn-primary btn-sm">Edit</button></Link>
                                                    <button onClick={()=>DeleteProduct(obj.id)} className="btn btn-danger btn-sm">Delete</button></td>
                                                </tr>
                                            })
                                        }
                                         
                                         
                                         
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

        </>
    )
}