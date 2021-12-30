 import react from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";


export default function EditUser(){
    let params = useParams()
    console.log(params);
    const formik = useFormik({
        initialValues:{
            name:"",
            position:"",
            office:"",
            age:0,
            startDate:"",
            salary:""
        },
        onSubmit: async values => {
            try {
                await fetch( `https://61c19a1d9dbcca0017c81fce.mockapi.io/users/${params.id}`,{
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
           let userdata= await fetch(`https://61c19a1d9dbcca0017c81fce.mockapi.io/users/${params.id}`)
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
                                <label>Name</label>
                                <input type="text" className="form-control"
                                onChange={formik.handleChange}
                                name="name"
                                value={formik.values.name}/> 
                            </div>
                            <div className="col-lg-6">
                                <label>Position</label>
                                <input type="text" className="form-control"
                                onChange={formik.handleChange}
                                name="position"
                                value={formik.values.position}/> 
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col-lg-6">
                                <label>Office</label>
                                <input type="text" className="form-control"
                                onChange={formik.handleChange}
                                name="office"
                                value={formik.values.office}/> 
                            </div>
                            <div className="col-lg-6">
                                <label>Age</label>
                                <input type="number" className="form-control"
                                onChange={formik.handleChange}
                                name="age"
                                value={formik.values.age}/> 
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col-lg-6">
                                <label>Start Date</label>
                                <input type="date" className="form-control" 
                                onChange={formik.handleChange}
                                name="startDate"
                                value={formik.values.startDate}/> 
                            </div>
                            <div className="col-lg-6">
                                <label>Salary</label>
                                <input type="number" className="form-control"
                                onChange={formik.handleChange}
                                name="salary"
                                value={formik.values.salary}/> 
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