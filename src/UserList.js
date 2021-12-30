import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {

const [user, setuser] = useState([])
useEffect(async()=>{
    userload()
},[])

    async function userload(){
        let userdata= await fetch('https://61c19a1d9dbcca0017c81fce.mockapi.io/users')
        let juser = await userdata.json()
        setuser(juser)

    }

    async function  DeleteUser(id) {
        
            try {
                await fetch( `https://61c19a1d9dbcca0017c81fce.mockapi.io/users/${id}`,{
                    method:"DELETE",
                     
                    headers:{
                        "content-type":"application/json"
                    }
                })
                alert("data deleted")
                userload()
                
            } 
            catch (error) {
                console.log(error)
            }
            
                  
    }
     

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
                <Link to="/user-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
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
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    user.map((obj, index) => {
                                        return <tr key={index}>
                                            <td>{obj.name}</td>
                                            <td>{obj.position}  </td>
                                            <td>{obj.office}</td>
                                            <td>{obj.age}</td>
                                            <td>{obj.startDate}</td>
                                            <td>{obj.salary}</td>
                                            <td><Link to={`/Edit-user/${obj.id}`}><button className="btn btn-primary btn-sm">Edit</button></Link>
                                                <button onClick={()=>DeleteUser(obj.id)} className="btn btn-danger btn-sm">Delete</button></td>
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