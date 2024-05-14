import { useEffect, useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'

const MyQueries = () => {
    const { user } = useAuth();
    const [myQuery, setMyQuery] = useState([]);
    const [control, setControl] = useState(false);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://alternative-product-information-server.vercel.app/deleteQuery/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your query has been deleted.",
                                    icon: "success"
                                });
                                setControl(!control)
                            }
                        })
                }
            })
    }

    const url = `https://alternative-product-information-server.vercel.app/myQueries/${user?.email}`
    useEffect(() => {
        fetch(url, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyQuery(data)
            })
    }, [url, control]);

    return (
        <div className="my-6">
            {
                myQuery.length > 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                        {
                            myQuery.map(query =>
                                <div key={query._id} className="card w-full bg-base-100 shadow-xl">
                                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {query.product_name}
                                            <div className="badge badge-primary badge-outline uppercase">{query.brand_name}</div>
                                        </h2>
                                        <p>{query.query_title}</p>
                                        <div className="card-actions justify-end">
                                            <div className="flex items-center gap-2">
                                                <Link to={`/queryDetails/${query._id}`} className="btn btn-ghost btn-xs text-orange-300 btn-outline">Details</Link>
                                                <Link to={`/updateQuery/${query._id}`} className="btn btn-ghost btn-xs text-green-500 btn-outline">Update</Link>
                                                <button onClick={() => handleDelete(query._id)} className="btn btn-ghost btn-xs text-red-500 btn-outline">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    :
                    <div>
                        <h2 className="text-center my-4">You have no query!!!</h2>
                    </div>
            }

            <div className="px-8 py-2 shadow-lg">
                <div className="flex flex-col gap-2 md:flex-row items-center mx-auto container justify-center md:justify-between py-2">
                    <div>
                        <span>You can add your queries here! </span>
                    </div>
                    <Link to='/addQueries' rel="noopener noreferrer" className="flex items-center gap-2">
                        <MdOutlineLibraryAdd></MdOutlineLibraryAdd>
                        <span className="hover:underline focus-visible:underline">Add Queries</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyQueries;