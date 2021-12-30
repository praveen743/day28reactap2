import react from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";


export default function EditProduct(){
    let params = useParams()
    console.log(params);
    const formik = useFormik({
        initialValues:{
            productname:"",
            price:"",
            brand:"",
             
        },
        onSubmit: async values => {
            try {
                await fetch( `https://61c19a1d9dbcca0017c81fce.mockapi.io/products/${params.id}`,{
                    method:"PUT",
                    body: JSON.stringify(values),
                    headers:{
                        "content-type":"application/json"
                    }
                })
                alert("data saved")
            } 
            catch (error) {
                console.log(error)
            }
            
        }
    })

    

    useEffect(async ()=>{
        try {
           let userdata= await fetch(`https://61c19a1d9dbcca0017c81fce.mockapi.io/products/${params.id}`)
           let user = await userdata.json()
           formik.setValues(user)
        } catch (error) {
            console.log(error)
        }
      
    },[])
    return(
         <>
         <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">User Create</h1>
                         
                    </div>

                    <div className="container">
                        <form onSubmit={formik.handleSubmit}>
                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <label>Product Name</label>
                                <input type="text" className="form-control"
                                onChange={formik.handleChange}
                                name="productname"
                                value={formik.values.productname}/> 
                            </div>
                            <div className="col-lg-6">
                                <label>Price</label>
                                <input type="text" className="form-control"
                                onChange={formik.handleChange}
                                name="price"
                                value={formik.values.price}/> 
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col-lg-6">
                                <label>Brand</label>
                                <input type="text" className="form-control"
                                onChange={formik.handleChange}
                                name="brand"
                                value={formik.values.brand}/> 
                            </div>
                            </div>
                             
                        <div className="row mt-3">
                        <div className="col-lg-6">
                                 
                                <input type="submit" className="btn btn-primary mt-3"/> 
                            </div>
                             
                        </div>
                        </form>
                    </div>
         </>
    )
    
}