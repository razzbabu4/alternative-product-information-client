import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2';


const MyRecommendation = () => {
    const { user } = useAuth();
    const [myRecommendations, setMyRecommendations] = useState([]);
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
                    fetch(`https://alternative-product-information-server.vercel.app/deleteComment/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your recommendation has been deleted.",
                                    icon: "success"
                                });
                                setControl(!control)
                            }
                        })
                }
            })
    }
    const url = `https://alternative-product-information-server.vercel.app/myRecommendation/${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyRecommendations(data)
            })
    }, [url, control]);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Recommended Product</th>
                            <th>Recommendation Reason</th>
                            <th>Recommendation Title</th>
                            <th>Query Product</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myRecommendations.map(myComment => <tr key={myComment._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myComment.recommendedProductImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{
                                                myComment.recommendedProductName}</div>
                                            <div className="text-sm opacity-50">{myComment.currentTime}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myComment.recommendedReason}
                                </td>
                                <td>{myComment.recommendationTitle}</td>
                                <td>{myComment.productName}</td>
                                <th>
                                    <div>
                                        <button onClick={() => handleDelete(myComment._id)} className="btn btn-ghost btn-xs text-red-500 btn-outline">Delete</button>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyRecommendation;