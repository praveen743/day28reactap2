import react from "react";

export default function CreateUser(){
    return(
         <>
         <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">User Create</h1>
                         
                    </div>

                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-lg-6">
                                <label>Name</label>
                                <input type="text" className="form-control"/> 
                            </div>
                            <div className="col-lg-6">
                                <label>Position</label>
                                <input type="text" className="form-control"/> 
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col-lg-6">
                                <label>Office</label>
                                <input type="text" className="form-control"/> 
                            </div>
                            <div className="col-lg-6">
                                <label>Age</label>
                                <input type="number" className="form-control"/> 
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col-lg-6">
                                <label>Start Date</label>
                                <input type="date" className="form-control"/> 
                            </div>
                            <div className="col-lg-6">
                                <label>Salary</label>
                                <input type="number" className="form-control"/> 
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col-lg-6">
                                 
                                <input type="submit" className="btn btn-primary mt-3"/> 
                            </div>
                             
                        </div>
                    </div>
         </>
    )
    
}