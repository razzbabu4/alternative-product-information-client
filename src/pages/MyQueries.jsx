import { useEffect, useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MyQueries = () => {
    const { user } = useAuth();
    const [myQuery, setMyQuery] = useState([]);

    

    const url = `http://localhost:5000/queries?userEmail=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyQuery(data)
            })
    }, [url]);
    return (
        <div>
            <h2>My queries : {myQuery.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Boycotting Reason</th>
                            <th>Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myQuery.map(query => <tr key={query._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={query.product_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{
                                                query.product_name}</div>
                                            <div className="text-sm opacity-50">{query.brand_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {query.boycotting_reason}
                                </td>
                                <td>{query.query_title}</td>
                                <th>
                                    <div className="flex items-center gap-4">
                                        <Link to={`/viewDetails/${query._id}`} className="btn btn-ghost btn-xs text-orange-400 btn-outline">Details</Link>
                                        <Link to={`/updateQuery/${query._id}`} className="btn btn-ghost btn-xs text-green-500 btn-outline">Update</Link>
                                        {/* <button onClick={() => handleDelete(spot._id)} className="btn btn-ghost btn-xs text-red-500 btn-outline">Delete</button> */}
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
            <div className="px-8 py-2 border bg-gray-700 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                    <div>
                        <span>You can add your queries here! </span>
                    </div>
                    <Link to='/addQueries' href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
                        <MdOutlineLibraryAdd></MdOutlineLibraryAdd>
                        <span className="hover:underline focus-visible:underline">Add Queries</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyQueries;