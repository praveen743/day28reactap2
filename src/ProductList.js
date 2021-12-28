import { Link } from "react-router-dom";

export default function ProductList() {
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
                                        <tr>
                                            <td>T-shirt</td>
                                            <td>Rs.500</td>
                                            <td>Roadster</td>
                                             
                                            <button className="btn btn-primary btn-sm">Edit</button>
                                            <button className="btn btn-danger btn-sm">Delete</button>
                                        </tr>
                                        <tr>
                                        <td>T-shirt</td>
                                            <td>Rs.500</td>
                                            <td>Roadster</td>
                                             
                                            <button className="btn btn-primary btn-sm">Edit</button>
                                            <button className="btn btn-danger btn-sm">Delete</button>
                                        </tr>
                                         
                                         
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

        </>
    )
}