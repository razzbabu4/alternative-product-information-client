import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from 'react-router-dom';


const Notification = () => {
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
        <div className="min-h-[calc(100vh-442px)]">
            <div className="overflow-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        {
                            recommendations.map(myComment => <tr key={myComment._id}>
                                <td>
                                    <Link to='/recommendation' className="flex gap-6 items-center">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar online">
                                                    <div className="mask mask-circle w-10 h-10">
                                                        <img src={myComment.recommenderImage} alt="Recommender" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{
                                                        myComment.recommenderName}</div>
                                                    <div className="text-sm opacity-50">{myComment.currentTime}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            Recommend <span className="font-medium">{myComment.recommendedProductName}</span> for your product <span className="font-medium">{myComment.productName}</span>
                                        </div>
                                    </Link>
                                </td>

                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Notification;