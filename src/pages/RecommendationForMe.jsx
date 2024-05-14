import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const RecommendationForMe = () => {
    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState([]);

    const url = `https://alternative-product-information-server.vercel.app/recommendForMe/${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRecommendations(data)
            })
    }, [url]);
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
                            <th>My Query Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recommendations.map(myComment => <tr key={myComment._id}>
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
                                <th>
                                    <div>
                                        <div className="font-bold">{myComment.productName}</div>
                                        <div className="text-sm opacity-50">{myComment.queryTitle}</div>
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

export default RecommendationForMe;